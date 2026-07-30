let participantes = [];

function salvarParticipante(nome, whatsapp, numero) {
    participantes.push({
        nome: nome,
        whatsapp: whatsapp,
        numero: numero
    });

    alert("Número reservado com sucesso 🍀");
}
