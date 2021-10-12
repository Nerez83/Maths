function Equals() {

    let ExpX1 = parseInt(document.getElementById("x1").value)
    let ExpY1 = parseInt(document.getElementById("y1").value)
    let ExpZ1 = parseInt(document.getElementById("z1").value)
    let Exp1 = parseInt(document.getElementById("e1").value)

    let ExpX2 = parseInt(document.getElementById("x2").value)
    let ExpY2 = parseInt(document.getElementById("y2").value)
    let ExpZ2 = parseInt(document.getElementById("z2").value)
    let Exp2 = parseInt(document.getElementById("e2").value)

    let ExpX3 = parseInt(document.getElementById("x3").value)
    let ExpY3 = parseInt(document.getElementById("y3").value)
    let ExpZ3 = parseInt(document.getElementById("z3").value)
    let Exp3 = parseInt(document.getElementById("e3").value)

    let EqLine1 = document.getElementById("EqualsLine1")
    let EqLine2 = document.getElementById("EqualsLine2")

    let x = 0
    let y = 0
    let z = 0

    let EqLineX = document.getElementById("EqualsLineX")
    let EqLineY = document.getElementById("EqualsLineY")
    let EqLineZ = document.getElementById("EqualsLineZ")

    let ERRline = document.getElementById("ErrorLine")

    let y1 = 0
    let z1 = 0
    let e1 = 0

    let z2 = 0
    let e2 = 0

    let z3 = 0

    let p2 = 0
    let p3 = 0

    if (isNaN (ExpX1) || isNaN (ExpY1) || isNaN (ExpZ1) || isNaN (Exp1)  || isNaN (ExpX2)  || isNaN (ExpY2) || isNaN (ExpZ2) || isNaN (Exp2) || isNaN(ExpX3) || isNaN (ExpY3) || isNaN (ExpZ3) || isNaN (Exp3) ) {
        console.error ("NaN")
        ERRline.textContent = "Something is NaN."
    }
    
    switch (isNaN) {
        case ExpX1:
            ERRline.textContent = "X1 is Nann"
            break
        case ExpY1:
            ERRline.textContent = "Y1 is Nann"
            break
        case ExpZ1:
            ERRline.textContent = "Z1 is Nann"
            break
        case Exp1:
            ERRline.textContent = "1 is Nann"
            break
        case ExpX2:
            ERRline.textContent = "X2 is Nann"
            break
        case ExpY2:
            ERRline.textContent = "Y2 is Nann"
            break
        case ExpZ2:
            ERRline.textContent = "Z2 is Nann"
            break
        case Exp2:
            ERRline.textContent = "2 is Nann"
            break
        case ExpX3:
            ERRline.textContent = "X3 is Nann"
            break
        case ExpY3:
            ERRline.textContent = "Y3 is Nann"
            break
        case ExpZ3:
            ERRline.textContent = "Z3 is Nann"
            break
        case Exp3:
            ERRline.textContent = "3 is Nann"
            break
        default:
            console.log("Ignore this")

    }

    y1 = -ExpY1 / ExpX1
    z1 = -ExpZ1 / ExpX1
    e1 = -Exp1 / ExpX1
    let line1 = "x = (" + Math.round(y1*10000)/10000 + ")y + (" + Math.round(z1*10000)/10000 + ")z + (" + Math.round(e1*10000)/10000 + ")"
    EqLine1.textContent = line1

    p2 = ExpX2 * y1 + ExpY2
    z2 = (ExpX2 * z1 + ExpZ2) / -p2
    e2 = (ExpX2 * e1 + Exp2) / -p2
    let line2 = "y = (" + Math.round(z2*10000)/10000 + ")z + (" + Math.round(e2*10000)/10000 + ")"
    EqLine2.textContent = line2

    p3 = (y1 * e2 + e1) * ExpX3 + ExpY3 * e2 + Exp3
    z3 = (y1 * z2 + z1) * ExpX3 + ExpY3 * z2 + ExpZ3

    z = -p3 / z3
    y = z2 * z + e2
    x = y1 * y + z1 * z + e1
    let linex = "x = " + Math.round(x*10000)/10000
    let liney = "y = " + Math.round(y*10000)/10000
    let linez = "z = " + Math.round(z*10000)/10000

    if (ExpX1 * x + ExpY1 * y + ExpZ1 * z + Exp1 !== 0) {
        console.error ("Error 1 ")
        
    }
    if (ExpX2 * x + ExpY2 * y + ExpZ2 * z + Exp2 !== 0) {
        console.error ("Error 2 ")
        
    }
    if (ExpX3 * x + ExpY3 * y + ExpZ3 * z + Exp3 !== 0) {
        console.error ("Error 3 ")
        
    }

    EqLineX.textContent = linex
    EqLineY.textContent = liney
    EqLineZ.textContent = linez

}
