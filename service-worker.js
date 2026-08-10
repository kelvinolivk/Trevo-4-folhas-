const CACHE_NAME = "trevo4folhas-v3";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./manifest.json"
];

self.addEventListener("install", function(event) {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ARQUIVOS);
        })
    );

});

self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys().then(function(keys) {

            return Promise.all(

                keys.map(function(key) {

                    if(key !== CACHE_NAME) {
                        return caches.delete(key);
                    }

                })

            );

        }).then(function() {

            return self.clients.claim();

        })

    );

});

self.addEventListener("fetch", function(event) {

    event.respondWith(

        fetch(event.request)
            .then(function(response) {
                return response;
            })
            .catch(function() {
                return caches.match(event.request);
            })

    );

});
