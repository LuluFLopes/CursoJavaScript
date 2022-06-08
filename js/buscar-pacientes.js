var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();  // Inicializando o request para buscar os dados.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Abre a requisição com os parâmetros desejados.

    xhr.addEventListener("load", function () { // Evento load para executar comandos após o carregamento da página.

        console.log(xhr.responseText); // Pega o objeto em forma de String.

    });

    xhr.send(); // Envia a requisição configurada.

});