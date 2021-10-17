
let equals = document.getElementById("Equals")
let errLine = document.getElementById("ErrorLine")

function err() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)

    errLine.textContent = " "
    if (isNaN(NoX)) {
        errLine.textContent += " x"
    }
    if (isNaN(NoY)) {
        errLine.textContent += " y"
    }
    if (isNaN(NoY) || isNaN(NoY)) {
        errLine.textContent += " is NaN."
    }
    return

}

function add() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = NoX + NoY
}

function sub() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = NoX - NoY
}

function mult() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = NoX * NoY
}

function div() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = NoX / NoY
}

function pwr() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = Math.pow(NoX, NoY)
}

function root() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = Math.pow(NoY, 1/NoX)
 }

function sin() {
    let NoX = parseInt(document.getElementById("NumberX").value)
    let NoY = parseInt(document.getElementById("NumberY").value)
    equals.textContent = Math.log
}