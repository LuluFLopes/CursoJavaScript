var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();  // Inicializando o request para buscar os dados.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Abre a requisição com os parâmetros desejados.

    // xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes111"); <= Requisição com erro de endereço para teste.

    xhr.addEventListener("load", function () { // Evento load para executar comandos após o carregamento da página.

        if (xhr.status == 200) { // Garante que a requisição foi realizada com sucesso.
            erroAjax.classList.add("invisivel");
            erroAjax.classList.remove("erro-ajax"); 

            var resposta = xhr.responseText; // Salva o arquivo json como string.
            var pacientes = JSON.parse(resposta); // Converte o json em array.

            pacientes.forEach(function (paciente) {

                adicionaPacienteNaTabela(paciente);

            });

        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("erro-ajax");
        }

    });

    xhr.send(); // Envia a requisição configurada.

});