var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {

    // O JavaScript tem como padrão, limpar os formulários após pressionar o botão.
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulário(form);

    adicionaPacienteNaTabela(paciente);

    form.reset();  // Limpa o formulário preenchido.

    // Limpa as mensagens de erro.
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";  // Permite minipulação das informações dentro da tag alvo.

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// Estrutura de criação dos objetos em JavaScript
function obtemPacienteDoFormulário(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  // appendChild permite criação de estruturas Html por meio de JavaScript
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// Generalização da criação de td's, tornando o código dinâmico.
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    // push insere mensagens dentro de vetores.
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco!");
    }

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco!");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não poder ser em branco!");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco!");
    }

    return erros;

}