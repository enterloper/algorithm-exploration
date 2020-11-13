/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = str => {
    if (!str.length) return true;
    const cleanString = str
        .toLowerCase()
        .split('')
        .filter(char  => /[a-z0-9]/.test(char));

    let start = 0;
    let end = cleanString.length - 1;
    
    while (start < end) {
        if (cleanString[start] !== cleanString[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
};
