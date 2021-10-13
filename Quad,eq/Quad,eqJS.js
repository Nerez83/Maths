
function Equals() {
    const ExpA = parseInt(document.getElementById("a1").value)
    const ExpB = parseInt(document.getElementById("a1").value)
    const ExpC = parseInt(document.getElementById("a1").value)

    let EqX1 = document.getElementById("EqualsLineX1")
    let EqX2 = document.getElementById("EqualsLineX2")
    let Eq = document.getElementById("EqualsLine")

    const Disk = ExpB * ExpB - 4 * ExpA * ExpC

    switch (true) {
        case (Disk === 0):
            Eq.textContent = "Equation has only 1 solution."
            EqX1.textContent = `x = ${-ExpB / (2 * ExpA)}`
            break
        case (Disk > 0):
            Eq.textContent = "Equation has 2 solutions."
            EqX1.textContent = `x = ${(-ExpB + Math.sqrt(Disk)) / (2 * ExpA)}`
            EqX1.textContent = `x = ${(-ExpB - Math.sqrt(Disk)) / (2 * ExpA)}`
            break
        case (Disk < 0):
            Eq.textContent = "Equation has 0 solutions."
            EqX1.textContent = `x = ${-ExpB / (2 * ExpA)} + ${Math.round(Math.sqrt(-Disk) * 10000) / 10000}i = ${-ExpB / (2 * ExpA)} + √${ -Disk}i`
            EqX2.textContent = `x = ${-ExpB / (2 * ExpA)} - ${Math.round(Math.sqrt(-Disk) * 10000) / 10000}i = ${-ExpB / (2 * ExpA)} + √${ -Disk}i`
            break
        default:

    }
    console.log([ExpA, ExpB, ExpC, Disk])
}