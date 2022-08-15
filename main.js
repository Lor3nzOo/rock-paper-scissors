let options = ['paper', 'scissors', 'rock']
let brand = document.querySelector(".brand")
let h1 = document.createElement("h1")
let score = 0
let scoreEl = document.querySelector(".scorewrap h1")
let triang = document.querySelector(".triang")
let div = document.createElement("div")
let rules = document.querySelector(".rules")
const select = (e) => {
    let rand = options[Math.floor(Math.random()*options.length)]
    let img = e.querySelector("img")
    let src = img.getAttribute("src")
    src = src.slice(src.indexOf("-") + 1, src.indexOf("."))
    h1.className = "rez"
    let content
    if (src === rand) {
        content = "Izjednaceno"
    } else if (src === "paper" && rand === "scissors") {
        content = "Izgubio si"
    } else if (src === "paper" && rand === "rock") {
        content = "Pobijedio si"
    } else if (src === "scissors" && rand === "paper") {
        content = "Pobijedio si"
    } else if (src === "scissors" && rand === "rock") {
        content = "Izgubio si"
    } else if (src === "rock" && rand === "scissors") {
        content = "Pobijedio si"
    } else if (src === "rock" && rand === "paper") {
        content = "Izgubio si"
    }
    else if (src === "paper" && rand === "paper") {
        content = "Izgubio si"
    }
    if (content === "Izgubio si") {
        score = score -1
    } else if (content === "Pobijedio si")  {
        score++
    }
    rules.style.display = "none"
    triang.style.display = "none"
    h1.textContent = content
    scoreEl.textContent = score
    div.style.display = "flex"
    div.className = "div2"
    div.innerHTML = `<div class="divin1"><h1>Tvoj izbor</h1><img class=${src} src=${img.getAttribute("src")}></div>
                     <div class="divin2"><h1>${content}</h1><button onclick="playA()">Igraj ponovo</button></div>
                     <div class="divin1 divinh"><h1>Izbor računala</h1><img class=${rand} src=images/icon-${rand}.svg ></div>`
    brand.insertAdjacentElement("afterend", div)
}

const playA = () => {
    rules.style.display = "block"
    triang.style.display = "flex"
    div.style.display = "none"
}

const openModal = () => {
    document.querySelector(".modal").style.display = "flex"
    document.querySelector(".overlay").style.display = "block"
}

const closeModal = () => {
    document.querySelector(".modal").style.display = "none"
    document.querySelector(".overlay").style.display = "none"
}

scoreEl.textContent = score