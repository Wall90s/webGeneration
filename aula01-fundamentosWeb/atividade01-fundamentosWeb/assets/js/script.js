const nome = document.getElementById("nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const mapa = document.querySelector("#mapa")

let nomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "nome inválido"
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "e-mail inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "e-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")

    if (mensagem.value.length > 100) {
        txtMensagem.innerHTML = "limite de caracteres atingindo (-" + (mensagem.value.length - 100) + ")"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
        mensagemOk = false
    } else {
        txtMensagem.innerHTML = "mensagem válida"
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && mensagemOk) {
        alert("formulário enviado com sucesso")
    } else {
        alert("preencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom() {
    mapa.style.width = "110%"
    mapa.style.heigth = "110%"
}

function mapaPadrao() {
    mapa.style.width = "100%"
    mapa.style.heigth = "100%"
}