// console.log(getLetters([], 4))
// no zero => []
// 9 => [o,n,e,t,w,h,r,f,u,] 
// resultLength > 26 || < 0=> new Error
// resultLength = 26 => full alph

/* 
  I am creating a game where the player makes words from a set of letters chosen randomly from words in a dictionary. The exercise involves creating the list of letters.
  
  Create a function getLetters(words, resultLength) that returns a list of <resultLength> unique letters found in the given words. For each word, you must either use all of the letters or none.
  If you have used up the words and still have space left, merge in letters from the string etaoinshrdlucmfwypvbgkjqxz (this is the letters in the English dictionary in order of frequency)
  
  Example: getLetters(words, 9) should return a list of 9 unique letters
  
  The words to use for testing are: "one", "two", "three", "four", "five", "six"
  
  Your code should not use a for loop.
*/

const getLetters = (words, resultLength) => {
    const reserve = 'etaoinshrdlucmfwypvbgkjqxz'.split('');
    const output = [];

    if (!words.length) {
        return reserve.slice(0, resultLength);
    }

    const hash = {};
    let i = 0;

    while (output.length < resultLength && i < words.length) {
        words[i].split('').forEach(letter => {
        if (!hash[letter]) {
            hash[letter] = letter;
            output.push(letter);
        }
        });
        i++;
    }

    while (output.length < resultLength) {
        reserve.forEach(letter => {
        if (!hash[letter]) {
            output.push(letter);
        }
        });
    }

    return output.slice(0, resultLength);
    };
  
for(let i=0; i<15; i++) {
    let value = getLetters(["one", "two", "three", "four", "five", "six"], i);
    console.log(`resultLength: ${i}, ${JSON.stringify(value)}, ${value.length}`);
}
  
  console.log(getLetters(["one", "two", "three", "four", "five", "six"], 9));
