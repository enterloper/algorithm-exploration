/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s, first, last) {
    while(first < last) {
        if (s[first] !== s[last]) return false;
        first++;
        last--;   
    }

    return true;
};

var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;

    while(start<end) {
        if (s[start] !== s[end]) {
            return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
};

const testcases = [
    "aba",
    "abc",
    "abca",
    "ebcbbececabbacecbbcbe",
    "deeee"
];
isPalindrome('abc', 0, 2)
testcases.forEach(test => {
    console.log(validPalindrome(test));
})
