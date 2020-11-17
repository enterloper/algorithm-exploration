/**
 * @param {number} N
 * @return {number}
 */

var fib = function(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;
    const fibNumbers = [0, 1];
    for (let i=1; i<N; i++) {
        fibNumbers.push(fibNumbers[i - 1]+fibNumbers[i]);
    }
    
    return fibNumbers[fibNumbers.length - 1];
};