/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    const xStringified = x.toString();
    let start = 0;
    let end = xStringified.length - 1;
    
    while(start < end) {
        if(xStringified[start] !== xStringified[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
};

////////// SOLUTION WITHOUT STRING CONVERSION //////////

/**
 * @param {number} x
 * @return {boolean}
 */

const reverseInt = function(x){
    let reversed = 0
    while(x > 0){
        reversed = (reversed * 10) + (x % 10)
        x = Math.floor(x/10)
    }
    return reversed
}

const isPalindrome = function(x) {
  if(x < 0) return false
    
  return x === reverseInt(x)
    
};

isPalindrome(123);