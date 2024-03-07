const botaoAbrir = document.querySelector(".header-mobile > button")
const botaofechar = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abrirmenu)
botaofechar.addEventListener(click ,)

function abrirmenu () {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharmenu() {
    body.classlist.remove("escurecer")
    nav.classList.remove("abrir")
}