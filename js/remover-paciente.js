var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover.
    paiDoAlvo.remove();
    */

    event.target.parentNode.classList.add("fadeOut");

    // Cria um temporizador para aguardar um período antes da execução de determinado comando.
    setTimeout(function () {
        event.target.parentNode.remove(); // target: alvo do evento | parentNode: Pai do alvo. | remove(): Remoção da estrutura selecionada.
    }, 500);
    
});