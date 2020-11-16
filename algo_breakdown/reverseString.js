const word = 'brilliant'.split('');

function reverseString(arrayOfChars) {
    let first = 0;
    let last = arrayOfChars.length - 1;

    while(first < last) {
        let stored = arrayOfChars[first];
        arrayOfChars[first] = arrayOfChars[last];
        arrayOfChars[last] = stored;
        first++;
        last--;
    }
    return arrayOfChars;
}

console.log(reverseString(word).join(''));