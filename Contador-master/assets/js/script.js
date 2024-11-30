// Função para inicializar um contador
function inicializarContador(numeroId, avancarId, voltarId, resetId) {
    const numero = document.getElementById(numeroId);
    let contador = 0;

    // Botão de avançar
    document.getElementById(avancarId).addEventListener("click", (e) => {
        e.preventDefault();
        contador++;
        numero.textContent = contador;
    });

    // Botão de voltar
    document.getElementById(voltarId).addEventListener("click", (e) => {
        e.preventDefault();
        contador--;
        numero.textContent = contador;
    });

    // Botão de reset
    document.getElementById(resetId).addEventListener("click", (e) => {
        e.preventDefault();
        contador = 0;
        numero.textContent = contador;
    });
}

// Inicializando os contadores
inicializarContador("numero1", "avancar1", "voltar1", "reset1");
inicializarContador("numero2", "avancar2", "voltar2", "reset2");
inicializarContador("numero3", "avancar3", "voltar3", "reset3");
inicializarContador("numero4", "avancar4", "voltar4", "reset4");
