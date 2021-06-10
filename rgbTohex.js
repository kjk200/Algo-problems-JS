// rgb to hex conversion problem for Comcast position

function rgbTohex(r, g, b) {

    const finalHex = [r, g, b].map((item) => {
        if (item < 0) {
            item = 0;
        }
        else if (item > 255) {
            item = 255;
        }

        const hex = item.toString(16);
        if (hex.length === 1) {
            return ("0" + hex);
        }
        return hex;
    });

    return finalHex.join("").toUpperCase();

}


