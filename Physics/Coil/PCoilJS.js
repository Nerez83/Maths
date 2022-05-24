function hide() {
    document.getElementById("volt-form").style.visibility = "hidden";
    document.getElementById("curr-form").style.visibility = "hidden";
    document.getElementById("turn-form").style.visibility = "hidden";
    document.getElementById("eff-form").style.visibility = "hidden";
    document.getElementById("turn-volt").style.visibility = "hidden";
    document.getElementById("volt1-nan").style.visibility = "hidden";
    document.getElementById("curr1-nan").style.visibility = "hidden";
    document.getElementById("turn1-nan").style.visibility = "hidden";
    document.getElementById("volt2-nan").style.visibility = "hidden";
    document.getElementById("curr2-nan").style.visibility = "hidden";
    document.getElementById("turn2-nan").style.visibility = "hidden";
    document.getElementById("eff-nan").style.visibility = "hidden";
    document.getElementById("volt1").style.borderColor = "transparent"
    document.getElementById("curr1").style.borderColor = "transparent"
    document.getElementById("turn1").style.borderColor = "transparent"
    document.getElementById("volt2").style.borderColor = "transparent"
    document.getElementById("curr2").style.borderColor = "transparent"
    document.getElementById("turn2").style.borderColor = "transparent"
    document.getElementById("eff").style.borderColor = "transparent"
}
function TA() {
    document.getElementById("volt1").value = ""
    document.getElementById("curr1").value = ""
    document.getElementById("turn1").value = ""
    document.getElementById("volt2").value = ""
    document.getElementById("curr2").value = ""
    document.getElementById("turn2").value = ""
    document.getElementById("eff").value = ""

}
function voltage() {    // U2 = U1 / (N1 / N2)
    let Volt1 = parseFloat(document.getElementById("volt1").value)
    let Turn1 = parseFloat(document.getElementById("turn1").value)
    let Turn2 = parseFloat(document.getElementById("turn2").value)
    hide()
    document.getElementById("volt1").style.borderColor = "blue"
    document.getElementById("turn1").style.borderColor = "blue"
    document.getElementById("turn2").style.borderColor = "blue"
    document.getElementById("volt-form").style.visibility = "visible";
    document.getElementById("turn-volt").style.visibility = "visible";
    if (document.getElementById("volt1").value.match(/([^0-9\.+-])/g) || isNaN(Volt1)) {
        document.getElementById("volt1-nan").style.visibility = "visible";
    }
    if (document.getElementById("turn1").value.match(/([^0-9\.+-])/g) || isNaN(Turn1)) {
        document.getElementById("turn1-nan").style.visibility = "visible";
    }
    if (document.getElementById("turn2").value.match(/([^0-9\.+-])/g) || isNaN(Turn2)) {
        document.getElementById("turn2-nan").style.visibility = "visible";
    }
    let Result = "Result: " + Volt1 / (Turn1 / Turn2) + " V"
    document.getElementById("result").textContent = Result;
}

function current() {    // I2 = (U1 * I1 * η) / U2
    let Volt1 = parseFloat(document.getElementById("volt1").value)
    let Curr1 = parseFloat(document.getElementById("curr1").value)
    let Volt2 = parseFloat(document.getElementById("volt2").value)
    let Eff = parseFloat(document.getElementById("eff").value)
    hide()
    document.getElementById("volt1").style.borderColor = "blue"
    document.getElementById("curr1").style.borderColor = "blue"
    document.getElementById("volt2").style.borderColor = "blue"
    document.getElementById("eff").style.borderColor = "blue"
    document.getElementById("curr-form").style.visibility = "visible";
    if (document.getElementById("volt1").value.match(/([^0-9\.+-])/g) || isNaN(Volt1)) {
        document.getElementById("volt1-nan").style.visibility = "visible";
    }
    if (document.getElementById("curr1").value.match(/([^0-9\.+-])/g) || isNaN(Curr1)) {
        document.getElementById("curr1-nan").style.visibility = "visible";
    }
    if (document.getElementById("volt2").value.match(/([^0-9\.+-])/g) || isNaN(Volt2)) {
        document.getElementById("volt2-nan").style.visibility = "visible";
    }
    if (document.getElementById("eff").value.match(/([^0-9\.+-])/g) || isNaN(Eff)) {
        document.getElementById("eff-nan").style.visibility = "visible";
    }
    let Result = "Result: " + (Volt1 * Curr1 * Eff) / Volt2 + " A"
    document.getElementById("result").textContent = Result;
}
function turns() {      // N2 = N1 / (U1 / U2)
    let Turn1 = parseFloat(document.getElementById("turn1").value)
    let Volt1 = parseFloat(document.getElementById("volt1").value)
    let Volt2 = parseFloat(document.getElementById("volt2").value)
    hide()
    document.getElementById("turn1").style.borderColor = "blue"
    document.getElementById("volt1").style.borderColor = "blue"
    document.getElementById("volt2").style.borderColor = "blue"
    document.getElementById("turn-form").style.visibility = "visible";
    document.getElementById("turn-volt").style.visibility = "visible";
    if (document.getElementById("turn1").value.match(/([^0-9\.+-])/g) || isNaN(Turn1)) {
        document.getElementById("turn1-nan").style.visibility = "visible";
    }
    if (document.getElementById("volt1").value.match(/([^0-9\.+-])/g) || isNaN(Volt1)) {
        document.getElementById("volt1-nan").style.visibility = "visible";
    }
    if (document.getElementById("volt2").value.match(/([^0-9\.+-])/g) || isNaN(Volt2)) {
        document.getElementById("volt2-nan").style.visibility = "visible";
    }
    let Result = "Result: " + Turn1 / (Volt1 / Volt2) + " turns"
    document.getElementById("result").textContent = Result;
}

function efficiency() { // η = (I2 * U2) / (I1 * U1)
    let Volt1 = parseFloat(document.getElementById("volt1").value)
    let Volt2 = parseFloat(document.getElementById("volt2").value)
    let Curr1 = parseFloat(document.getElementById("curr1").value)
    let Curr2 = parseFloat(document.getElementById("curr2").value)
    hide()
    document.getElementById("volt1").style.borderColor = "blue"
    document.getElementById("volt2").style.borderColor = "blue"
    document.getElementById("curr1").style.borderColor = "blue"
    document.getElementById("curr2").style.borderColor = "blue"
    document.getElementById("eff-form").style.visibility = "visible";
    if (document.getElementById("curr1").value.match(/([^0-9\.+-])/g) || isNaN(Curr1)) {
        document.getElementById("curr1-nan").style.visibility = "visible";
    }
    if (document.getElementById("curr2").value.match(/([^0-9\.+-])/g) || isNaN(Curr2)) {
        document.getElementById("curr2-nan").style.visibility = "visible";
    }
    if (document.getElementById("volt1").value.match(/([^0-9\.+-])/g) || isNaN(Volt1)) {
        document.getElementById("volt1-nan").style.visibility = "visible";
    }
    if (document.getElementById("volt2").value.match(/([^0-9\.+-])/g) || isNaN(Volt2)) {
        document.getElementById("volt2-nan").style.visibility = "visible";
    }
    let Result = "Result: " + (Curr2 * Volt2) / (Curr1 * Volt1)
    document.getElementById("result").textContent = Result;
}
