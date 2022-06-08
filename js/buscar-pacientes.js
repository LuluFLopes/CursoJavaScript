var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();  // Inicializando o request para buscar os dados.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Abre a requisição com os parâmetros desejados.

    xhr.addEventListener("load", function () { // Evento load para executar comandos após o carregamento da página.

        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function (paciente) {

            adicionaPacienteNaTabela(paciente);

        });

    });

    xhr.send(); // Envia a requisição configurada.

});