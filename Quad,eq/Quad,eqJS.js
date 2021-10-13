
function Equals() {
    const ExpA = parseInt(document.getElementById("a").value)
    const ExpB = parseInt(document.getElementById("b").value)
    const ExpC = parseInt(document.getElementById("c").value)

    let EqX1 = document.getElementById("EqualsLineX1")
    let EqX2 = document.getElementById("EqualsLineX2")
    let Eq = document.getElementById("EqualsLine")
    let Diskrim = document.getElementById("Diskriminator")

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
            EqX1.textContent = `x = ${Math.round(((-ExpB + Math.sqrt(Disk)) / (2 * ExpA)) * 10000) / 10000} = ${-ExpB / (2 * ExpA)} + √${ Disk}`
            EqX2.textContent = `x = ${Math.round(((-ExpB - Math.sqrt(Disk)) / (2 * ExpA)) * 10000) / 10000} = ${-ExpB / (2 * ExpA)} - √${ Disk}`
            break
        case (Disk < 0):
            Eq.textContent = "Equation has 0 solutions."
            EqX1.textContent = `x = ${Math.round((-ExpB / (2 * ExpA)) * 10000) / 10000} + ${Math.round(Math.sqrt(-Disk) * 10000) / 10000} i = ${-ExpB / (2 * ExpA)} + √${ -Disk} i`
            EqX2.textContent = `x = ${Math.round((-ExpB / (2 * ExpA)) * 10000) / 10000} - ${Math.round(Math.sqrt(-Disk) * 10000) / 10000} i = ${-ExpB / (2 * ExpA)} - √${ -Disk} i`
            break
        default:

    }
    console.log([ExpA, ExpB, ExpC, Disk])
    console.log(ExpB * ExpB)
}