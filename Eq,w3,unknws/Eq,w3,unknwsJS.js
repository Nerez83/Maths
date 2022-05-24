function Equals() {

    const Start = Date.now()

    let EqLineX = document.getElementById("EqualsLineX")
    let EqLineY = document.getElementById("EqualsLineY")
    let EqLineZ = document.getElementById("EqualsLineZ")
    let EqLine1 = document.getElementById("EqualsLine1")
    let EqLine2 = document.getElementById("EqualsLine2")
    let ERRline = document.getElementById("ErrorLine")

    let ExpX1 = parseFloat(document.getElementById("x1").value)
    let ExpY1 = parseFloat(document.getElementById("y1").value)
    let ExpZ1 = parseFloat(document.getElementById("z1").value)
    let Exp1 = parseFloat(document.getElementById("e1").value)

    let ExpX2 = parseFloat(document.getElementById("x2").value)
    let ExpY2 = parseFloat(document.getElementById("y2").value)
    let ExpZ2 = parseFloat(document.getElementById("z2").value)
    let Exp2 = parseFloat(document.getElementById("e2").value)

    let ExpX3 = parseFloat(document.getElementById("x3").value)
    let ExpY3 = parseFloat(document.getElementById("y3").value)
    let ExpZ3 = parseFloat(document.getElementById("z3").value)
    let Exp3 = parseFloat(document.getElementById("e3").value)

    ERRline.textContent = "."

    if (document.getElementById("x1").value.match(/([^0-9\.+-])/g) || isNaN(ExpX1)) {
        ERRline.textContent += "x1"
    }
    else if (document.getElementById("y1").value.match(/([^0-9\.+-])/g) || isNaN(ExpY1)) {
        ERRline.textContent += " y1"
    }
    else if (document.getElementById("z1").value.match(/([^0-9\.+-])/g) || isNaN(ExpZ1)) {
        ERRline.textContent += " z1"
    }
    else if (document.getElementById("e1").value.match(/([^0-9\.+-])/g) || isNaN(Exp1)) {
        ERRline.textContent += " e1"
    }
    else if (document.getElementById("x2").value.match(/([^0-9\.+-])/g) || isNaN(ExpX2)) {
        ERRline.textContent += "x2"
    }
    else if (document.getElementById("y2").value.match(/([^0-9\.+-])/g) || isNaN(ExpY2)) {
        ERRline.textContent += " y2"
    }
    else if (document.getElementById("z2").value.match(/([^0-9\.+-])/g) || isNaN(ExpZ2)) {
        ERRline.textContent += " z2"
    }
    else if (document.getElementById("e2").value.match(/([^0-9\.+-])/g) || isNaN(Exp2)) {
        ERRline.textContent += " e2"
    }
    else if (document.getElementById("x3").value.match(/([^0-9\.+-])/g) || isNaN(ExpX3)) {
        ERRline.textContent += " x3"
    }
    else if (document.getElementById("y3").value.match(/([^0-9\.+-])/g) || isNaN(ExpY3)) {
        ERRline.textContent += " y3"
    }
    else if (document.getElementById("z3").value.match(/([^0-9\.+-])/g) || isNaN(ExpZ3)) {
        ERRline.textContent += " z3"
    }
    else if (document.getElementById("e3").value.match(/([^0-9\.+-])/g) || isNaN(Exp3)) {
        ERRline.textContent += " e3"
    }

    if (document.getElementById("x1").value.match(/([^0-9\.+-])/g) || isNaN(ExpX1) || document.getElementById("y1").value.match(/([^0-9\.+-])/g) || isNaN(ExpY1) || document.getElementById("z1").value.match(/([^0-9\.+-])/g) || isNaN(ExpZ1) || document.getElementById("e1").value.match(/([^0-9\.+-])/g) || isNaN(Exp1)  
    || document.getElementById("x2").value.match(/([^0-9\.+-])/g) || isNaN(ExpX2)  || document.getElementById("y2").value.match(/([^0-9\.+-])/g) || isNaN(ExpY2) || document.getElementById("z2").value.match(/([^0-9\.+-])/g) || isNaN(ExpZ2) || document.getElementById("e2").value.match(/([^0-9\.+-])/g) || isNaN(Exp2) 
    || document.getElementById("x3").value.match(/([^0-9\.+-])/g) || isNaN(ExpX3) || document.getElementById("y3").value.match(/([^0-9\.+-])/g) || isNaN(ExpY3) || document.getElementById("z3").value.match(/([^0-9\.+-])/g) || isNaN(ExpZ3) || document.getElementById("e3").value.match(/([^0-9\.+-])/g) || isNaN(Exp3) ) {
        console.error ("NaN")
        ERRline.textContent += " is NaN."
        EqLine1.textContent = "0"
        EqLine2.textContent = "0"
        EqLineX.textContent = "0"
        EqLineY.textContent = "0"
        EqLineZ.textContent = "0"
        return
    }

    let expf = parseInt(document.getElementById("round").value)
    
    let x = 0
    let y = 0
    let z = 0

    let y1 = 0
    let z1 = 0
    let e1 = 0

    let z2 = 0
    let e2 = 0

    let z3 = 0

    let p2 = 0
    let p3 = 0

    function round (num) {
        return Math.round(num*(10^expf))/10^expf
    }

    y1 = round(-ExpY1 / ExpX1)
    z1 = round(-ExpZ1 / ExpX1)
    e1 = round(-Exp1 / ExpX1)
    const line1 = "x = (" + Math.round(y1*10000)/10000 + ")y + (" + Math.round(z1*10000)/10000 + ")z + (" + Math.round(e1*10000)/10000 + ")"
    EqLine1.textContent = line1

    p2 = round(ExpX2 * y1 + ExpY2)
    z2 = round((ExpX2 * z1 + ExpZ2) / -p2)
    e2 = round((ExpX2 * e1 + Exp2) / -p2)
    const line2 = "y = (" + Math.round(z2*10000)/10000 + ")z + (" + Math.round(e2*10000)/10000 + ")"
    EqLine2.textContent = line2

    p3 = round((y1 * e2 + e1) * ExpX3 + ExpY3 * e2 + Exp3)
    z3 = round((y1 * z2 + z1) * ExpX3 + ExpY3 * z2 + ExpZ3)

    z = -p3 / z3
    y = z2 * z + e2
    x = y1 * y + z1 * z + e1
    const linex = "x = " + Math.round(x*10000)/10000
    const liney = "y = " + Math.round(y*10000)/10000
    const linez = "z = " + Math.round(z*10000)/10000

    const result1 = ExpX1 * x + ExpY1 * y + ExpZ1 * z + Exp1
    const result2 = ExpX2 * x + ExpY2 * y + ExpZ2 * z + Exp2
    const result3 = ExpX3 * x + ExpY3 * y + ExpZ3 * z + Exp3

    if (result1 > 0.00001 && result1 < -0.00001) {
        console.error ("Error 1 ")
        
    }
    if (result2 > 0.00001 && result2 < -0.00001) {
        console.error ("Error 2 ")
        
    }
    if (result3 > 0.00001 && result3 < -0.00001) {
        console.error ("Error 3 ")
        
    }

    EqLineX.textContent = linex
    EqLineY.textContent = liney
    EqLineZ.textContent = linez

    console.log(`This operation took approximately ${Date.now() - Start} ms.`)
}