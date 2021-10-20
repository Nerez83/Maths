
let equals = document.getElementById("Equals")
let equals2 = document.getElementById("Equals2")
let errLine = document.getElementById("ErrorLine")

let NoX = 0
let NoY = 0

function err() {
    equals2.textContent = "0"

    errLine.textContent = "."
    if (!document.getElementById("NumberX").value.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/g)) {
        errLine.textContent += " x"
    }

    if (!document.getElementById("NumberY").value.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/g)) {
        errLine.textContent += " y"
    }

    if (!document.getElementById("NumberX").value.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/g) || !document.getElementById("NumberY").value.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/g)) {
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
    equals.textContent = Math.round((NoX + NoY)*10000)/10000
    foo()
}

function sub() {
    err()
    equals.textContent = Math.round((NoX - NoY)*10000)/10000
    foo()
}

function mult() {
    err()
    equals.textContent = Math.round((NoX * NoY)*10000)/10000
    foo()
}

function div() {
    err()
    equals.textContent = Math.round((NoX / NoY)*10000)/10000
    foo()
}

function pwr() {
    err()
    equals.textContent = Math.round((Math.pow(NoX, NoY))*10000)/10000
    foo()
}

function root() {
    err()
    equals.textContent = Math.round((Math.pow(NoY, 1 / NoX))*10000)/10000
    foo()
}

function trig() {
    err()
    equals.textContent = "sin of X = " + Math.round((Math.sin(NoX))*1000)/1000
    equals2.textContent = "cos of Y = " + Math.round((Math.cos(NoY))*1000)/1000
    foo()
}

function trigh() {
    err()
    equals.textContent = "sinh of X = " + Math.round((Math.sinh(NoX))*1000)/1000
    equals2.textContent = "cosh of Y = " + Math.round((Math.cosh(NoY))*1000)/1000
    foo()
}

function tg() {
    err()
    equals.textContent = "tg of X = " + Math.round((Math.tan(NoX)) * 1000) / 1000
    equals2.textContent = "cotg of Y = " + Math.round(1 / (Math.tan(NoY)) * 1000) / 1000
    foo()
}

function tgh() {
    err()
    equals.textContent = "tgh of X = " + Math.round((Math.tanh(NoX)) * 1000) / 1000
    equals2.textContent = " cotgh of Y = " + Math.round((Math.cosh(NoY) / Math.sinh(NoY)) * 1000) / 1000
    foo()
}

function test() {
    console.log("test")
}

