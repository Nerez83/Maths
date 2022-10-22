function andNaN(a, b, c) {
    if (isNaN(a) && isNaN(b) && isNaN(c)) {
        return true;
    }
    else {
        return false;
    }
}
function orNaN(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return false;
    }
    else {
        return true;
    }

}

function equals(type) {
    const Start = Date.now()

    const a = parseFloat(document.getElementById("in-a").value)
    const b = parseFloat(document.getElementById("in-b").value)
    const c = parseFloat(document.getElementById("in-c").value)
    const sina = parseFloat(document.getElementById("in-sina").value)
    const sinb = parseFloat(document.getElementById("in-sinb").value)
    const sinc = parseFloat(document.getElementById("in-sinc").value)
    let out = document.getElementById("equalsLn")
    let out2 = document.getElementById("equalsLn2")

    function sin(x) { // sin(x to rad)
        switch (true) {
            case type == "deg":
                return Math.sin(x * 0.005555555555555556 * Math.PI);
            case type == "grad":
                return Math.sin(x * 0.0025 * Math.PI);
            case type == "rad":
                return Math.sin(x);
            case type == "sin":
                return x;
            default:
                console.error("Invalid number type.")
        }
    }
    function convert(x) {
        return (x / Math.PI) * 180 
        switch (true) {
            case type == "deg":
                return (x / Math.PI) * 180;
            case type == "grad":
                return (x / Math.PI) * 200;
            case type == "rad":
                return x;
            case type == "sin":
                return "sin = " + x;
            default:
                console.error("Invalid number type.")
        }
    }

    function out_side(a, b, c, d) {
        out.textContent = a + " = " + (sin(b) * c) / sin(d)
        out2.textContent = ""
    }
    function out_angle(a, b, c, d) {
        if (sin(d) < 0) {
            out.textContent = "Error: pls angles only 0° - 180° thx 'm too lazy"
            out2.textContent = ""
            return;
        }
        else {
        switch (true) {
            case a == "sina":
                a = "alpha"
                break;
            case a == "sinb":
                a = "beta"
                break;
            case a == "sinc":
                a = "gamma"
                break;
            default:
                console.error("code broke lmao")
        }

        const angle = Math.asin((b * sin(d)) / c) //angle in rads

        switch (true) {
            case Math.PI - angle <= sin(d):
                out.textContent = `${a} = ${convert(angle)}   ${a} = ${convert(Math.PI - angle)}`
                out2.textContent = `sin (${a}) = ${(b * sin(d)) / c}`
                break;

            case Math.PI - angle > sin(d):
                out.textContent = `${a} = ${convert(angle)}`
                out2.textContent = `sin (${a}) = ${(b * sin(d)) / c}`
                break;

            default:
                out.textContent = "Error: asi nemá řesení idk"
                out2.textContent = ""
                console.error("WTH happened???")
        }
        }
    }

    switch (true) {
        case andNaN(a, c, sinc) && orNaN(sina, b, sinb): //calculate a with b
            out_side("a", sina, b, sinb)
            console.log(1, "a w b");
            break;

        case andNaN(a, b, sinb) && orNaN(sina, c, sinc): //calculate a with c
            out_side("a", sina, c, sinc)
            console.log(2, "a w c");
            break;

        case andNaN(sina, c, sinc) && orNaN(a, b, sinb): //calculate sina with b
            out_angle("sina", a, b, sinb)
            console.log(3, "sina w b");
            break;

        case andNaN(sina, b, sinb) && orNaN(a, c, sinc): //calculate sina with c
            out_angle("sina", a, c, sinc)
            console.log(4, "sina w c");
            break;

        case andNaN(b, c, sinc) && orNaN(sinb, a, sina): //calculate b with a
            out_side("b", sinb, a, sina)
            console.log(5, "b w a");
            break;

        case andNaN(b, a, sina) && orNaN(sinb, c, sinc): //calculate b with c
            out_side("b", sinb, c, sinc)
            console.log(6, "b w c");
            break;

        case andNaN(sinb, c, sinc) && orNaN(b, a, sina): //calculate sinb with a
            out_angle("sinb", b, a, sina)
            console.log(7, "sinb w a");
            break;

        case andNaN(sinb, a, sina) && orNaN(b, c, sinc): //calculate sinb with c
            out_angle("sinb", b, c, sinc)
            console.log(8, "sinb w c");
            break;

        case andNaN(c, b, sinb) && orNaN(sinc, a, sina): //calculate c with a
            out_side("c", sinc, a, sina)
            console.log(9, "c w a");
            break;

        case andNaN(c, a, sina) && orNaN(sinc, b, sinb): //calculate c with b
            out_side("c", sinc, b, sinb)
            console.log(10, "c w b");
            break;

        case andNaN(sinc, b, sinb) && orNaN(c, a, sina): //calculate sinc with a
            out_angle("sinc", c, a, sina)
            console.log(11, "sinc w a");
            break;

        case andNaN(sinc, a, sina) && orNaN(c, b, sinb): //calculate sinc with b
            out_angle("sinc", c, b, sinb)
            console.log(12, "sinc w b");
            break;

        default:
            out.textContent = "Error: invalid numbers"
            out2.textContent = ""
            console.error(13, "Invalid numbers");

    }
    console.info(`time = ${Date.now() - Start}`)
}