const myAtoi = str => {
    let integer = '';
    const allowedCharCodes = [32, 43, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

    for(let i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i))
        if (allowedCharCodes.indexOf(str.charCodeAt(i)) === -1  && !integer.length) {
            return 0;
        } else if (allowedCharCodes.indexOf(str.charCodeAt(i)) > -1) {
            if (str.charCodeAt(i) === 32 || str.charCodeAt(i) === 43) {
                continue;
            } else {
                integer += str.charCodeAt(i);
            }
        } else if (integer.length) {
            break;
        }
    }

    if (!integer.length) return 0;
    console.log(integer);
    const output = Number(integer);
    if (output < -2147483648) {
        return -2147483648;
    } else if(output > 2147483648) {
        return 2147483648
    } 
    return output;
};

console.log(myAtoi("  -+1234c567890"));