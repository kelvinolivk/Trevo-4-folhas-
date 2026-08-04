let participantes = JSON.parse(
    localStorage.getItem("participantes")
) || [];

function salvarParticipante(nome, whatsapp, numero) {

    participantes.push({

        nome: nome,
        whatsapp: whatsapp,
        numero: numero,
        pagamento: "🟡 Aguardando pagamento"

    });

    localStorage.setItem(
        "participantes",
        JSON.stringify(participantes)
    );

    alert("Aposta reservada com sucesso 🍀");
}
