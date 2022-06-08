var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
    
        paciente.classList.remove("invisivel"); // Removendo a classe da tag.

        pacientes.forEach(function (paciente) {

            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(campoFiltro.value, "i"); // Criando expressão regular.

            if (!expressao.test(nome)) { // Utilizando .test para comparar a expressão com o nome.
                paciente.classList.add("invisivel");

            } else {
                paciente.classList.remove("invisivel");
            }

        });

    } else {
        pacientes.forEach(function (paciente) {

            paciente.classList.remove("invisivel");

        });
    }
});