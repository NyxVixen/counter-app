let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function addFive() {
    count += 5
    countEl.textContent = count
}

function addTen() {
    count += 10
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0
}