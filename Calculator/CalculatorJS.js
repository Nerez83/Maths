
let equals = document.getElementById("Equals")
let equals2 = document.getElementById("Equals2")
let errLine = document.getElementById("ErrorLine")

let NoX = 0
let NoY = 0

function err() {
    equals2.textContent = "0"

    errLine.textContent = "."
    if (document.getElementById("NumberX").value.match(/\D/g)) {
        errLine.textContent += " x"
    }

    if (document.getElementById("NumberY").value.match(/\D/g)) {
        errLine.textContent += " y"
    }

    if (document.getElementById("NumberX").value.match(/\D/g) || document.getElementById("NumberY").value.match(/\D/g)) {
        errLine.textContent += " is NaN."
        equals.textContent = "0"
        NoX = 0 
        NoY = 0
        return
    }

    NoX = parseFloat(document.getElementById("NumberX").value)
    NoY = parseFloat(document.getElementById("NumberY").value)
}

function foo() {
    if (equals.textContent == "NaN") {
        equals.textContent = "0"
        errLine.textContent = "You haven't entered both numbers."
    }
}
function add() {
    err()
    equals.textContent = NoX + NoY
    foo()
}

function sub() {
    err()
    equals.textContent = NoX - NoY
    foo()
}

function mult() {
    err()
    equals.textContent = NoX * NoY
    foo()
}

function div() {
    err()
    equals.textContent = NoX / NoY
    foo()
}

function pwr() {
    err()
    equals.textContent = Math.pow(NoX, NoY)
    foo()
}

function root() {
    err()
    equals.textContent = Math.pow(NoY, 1 / NoX)
    foo()
}

function trig() {
    err()
    equals.textContent = "sin of X = " + Math.round((Math.sin(NoX))*1000)/1000
    equals2.textContent = " cos of Y = " + Math.round((Math.cos(NoY))*1000)/1000
    foo()
}




