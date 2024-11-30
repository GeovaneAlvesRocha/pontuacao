// Valores iniciais para os contadores
let valoresIniciais = {
    contador1: 19, // Valor inicial para Equipe Bolívia-Brasil
    contador2: 16, // Valor inicial para Equipe Divertidamente
    contador3: 13, // Valor inicial para Equipe Fumaça
    contador4: 17  // Valor inicial para Equipe Winx
};

// Atualiza os valores dos elementos <p> com os valores iniciais
document.getElementById("numero1").textContent = valoresIniciais.contador1;
document.getElementById("numero2").textContent = valoresIniciais.contador2;
document.getElementById("numero3").textContent = valoresIniciais.contador3;
document.getElementById("numero4").textContent = valoresIniciais.contador4;

// Função para incrementar, decrementar e resetar para cada contador
function criarFuncoes(contadorId, numeroId) {
    let contador = valoresIniciais[contadorId]; // Recupera o valor inicial correspondente

    // Incrementar
    document.getElementById(`avancar${contadorId.slice(-1)}`).addEventListener("click", function (evento) {
        evento.preventDefault();
        contador++;
        document.getElementById(numeroId).textContent = contador;
    });

    // Decrementar
    document.getElementById(`voltar${contadorId.slice(-1)}`).addEventListener("click", function (evento) {
        evento.preventDefault();
        contador--;
        document.getElementById(numeroId).textContent = contador;
    });

    // Resetar para o valor inicial
    document.getElementById(`reset${contadorId.slice(-1)}`).addEventListener("click", function (evento) {
        evento.preventDefault();
        contador = valoresIniciais[contadorId]; // Reseta para o valor inicial
        document.getElementById(numeroId).textContent = contador;
    });
}

// Cria as funções para cada contador
criarFuncoes("contador1", "numero1");
criarFuncoes("contador2", "numero2");
criarFuncoes("contador3", "numero3");
criarFuncoes("contador4", "numero4");
