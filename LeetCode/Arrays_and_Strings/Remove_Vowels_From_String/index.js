/**
 * @param {string} str
 * @return {string}
 */
const removeVowels = str => {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };
    let output = '';
    for(let i = 0, l = str.length; i < l; i++) {
        if (!vowels[str[i]]) {
            output += str[i];
        }
    }
    return output;
};

console.log(removeVowels('supercalifragalisticexpialodocious'));