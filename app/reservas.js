let reservas = [];

function adicionarReserva(nome, whatsapp, numero){

reservas.push({
nome: nome,
whatsapp: whatsapp,
numero: numero,
pago: false
});

}

function mostrarReservas(){

let lista = document.getElementById("lista");

if(reservas.length === 0){
lista.innerHTML = "Nenhuma reserva ainda";
return;
}

lista.innerHTML = "";

reservas.forEach(r => {

lista.innerHTML +=
"👤 " + r.nome +
"<br>📱 " + r.whatsapp +
"<br>🎟️ Número: " + r.numero +
"<br>💰 Pago: Não<br><br>";

});

}
