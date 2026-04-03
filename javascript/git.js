let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
console.log(saveEL)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}
function decrement() {
    count = count - 1
    countEl.innerText = count
}
function save() {
    let previous = count + " - "
    saveEL.textContent += previous
    console.log(count)
    count -= count
    countEl.innerText = 0
}