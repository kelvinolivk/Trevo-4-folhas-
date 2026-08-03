let reservas = [];

function adicionarReserva(nome, whatsapp, numero){

reservas.push({
nome: nome,
whatsapp: whatsapp,
numero: numero,
status: "🟢 Participando",
pagamento: "🟡 Aguardando confirmação"
});

}

function confirmarPagamento(indice){

reservas[indice].pagamento = "✅ Pago";

mostrarReservas();

}

function mostrarReservas(){

let lista = document.getElementById("lista");

if(reservas.length === 0){
lista.innerHTML = "Nenhuma reserva ainda";
return;
}

lista.innerHTML = "";

reservas.forEach((r, i) => {

lista.innerHTML += `
<div style="background:#333;padding:15px;border-radius:10px;margin-bottom:15px;">
👤 <b>${r.nome}</b><br>
📱 ${r.whatsapp}<br>
🎟️ Número: ${r.numero}<br>
📌 ${r.status}<br>
💳 ${r.pagamento}<br><br>

<button onclick="confirmarPagamento(${i})"
style="background:green;color:white;border:none;padding:10px;border-radius:8px;">
✅ Confirmar pagamento
</button>

</div>
`;

});

}
