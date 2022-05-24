
function Equals() {
    
    const Start = Date.now()

    const ExpA = parseFloat(document.getElementById("a").value)
    const ExpB = parseFloat(document.getElementById("b").value)
    const ExpC = parseFloat(document.getElementById("c").value)

    let EqX1 = document.getElementById("EqualsLineX1")
    let EqX2 = document.getElementById("EqualsLineX2")
    let Eq = document.getElementById("EqualsLine")
    let Diskrim = document.getElementById("Diskriminator")
    let ErrLine = document.getElementById("ErrorLine")
    ErrLine.textContent = ""

    if (document.getElementById("a").value.match(/([^0-9\.+-])/g) || isNaN(ExpA)) {
        ErrLine.textContent += "a"
    }
    if (document.getElementById("b").value.match(/([^0-9\.+-])/g) || isNaN(ExpB)) {
        ErrLine.textContent += " b"
    }
    if (document.getElementById("c").value.match(/([^0-9\.+-])/g) || isNaN(ExpC)) {
        ErrLine.textContent += " c"
    }

    if(document.getElementById("a").value.match(/([^0-9\.+-])/g) || isNaN(ExpA) || document.getElementById("b").value.match(/([^0-9\.+-])/g) || isNaN(ExpB) || document.getElementById("c").value.match(/([^0-9\.+-])/g) || isNaN(ExpC)) {
        ErrLine.textContent += " is NaN"
        return
    }

    const Disk = (ExpB * ExpB) - (4 * ExpA * ExpC)
    Diskrim.textContent = `D = ${Disk}`

    switch (true) {
        case (Disk === 0):
            Eq.textContent = "Equation has only 1 solution."
            EqX1.textContent = `x = ${Math.round((-ExpB / (2 * ExpA)) * 10000) / 10000}`
            EqX2.textContent = 0
            break
        case (Disk > 0):
            Eq.textContent = "Equation has 2 solutions."
            EqX1.textContent = `x = ${Math.round(((-ExpB + Math.sqrt(Disk)) / (2 * ExpA)) * 10000) / 10000} = ${Math.round((-ExpB / (2 * ExpA))*10000)/10000} + √ ${ Math.round(Disk * 10000) / 10000} / ${Math.round(2 * ExpA * 10000)/10000}`
            EqX2.textContent = `x = ${Math.round(((-ExpB - Math.sqrt(Disk)) / (2 * ExpA)) * 10000) / 10000} = ${Math.round((-ExpB / (2 * ExpA))*10000)/10000} - √ ${ Math.round(Disk * 10000) / 10000} / ${Math.round(2 * ExpA * 10000)/10000}`
            break
        case (Disk < 0):
            Eq.textContent = "Equation has 0 solutions."
            EqX1.textContent = `x = ${Math.round((-ExpB / (2 * ExpA)) * 10000) / 10000} + ${Math.round(Math.sqrt(-Disk) * 10000) / 10000} i = ${Math.round(-ExpB / (2 * ExpA) * 10000) / 10000} + √${Math.round(-Disk * 10000) / 10000} / ${Math.round(2 * ExpA * 10000) / 10000} i`
            EqX2.textContent = `x = ${Math.round((-ExpB / (2 * ExpA)) * 10000) / 10000} - ${Math.round(Math.sqrt(-Disk) * 10000) / 10000} i = ${Math.round(-ExpB / (2 * ExpA) * 10000) / 10000} - √${Math.round(-Disk * 10000) / 10000} / ${Math.round(2 * ExpA * 10000) / 10000} i`
            break
        default:

    }

    console.log(`This operation took aproximately ${Date.now() - Start} ms.`)
}