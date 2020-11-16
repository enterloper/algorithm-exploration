const message1 = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

const message2 = [ 'l', 'a', 'n', 'd', 'e', 'd', ' ', 'h', 'a', 's', ' ',
'e', 'a', 'g', 'l', 'e', ' ', 't', 'h', 'e' ];

const message3 = 'yummy is cake bundt chocolate'.split('');

const reverseString = string => {

};

const reverseWords = message => {
    const counts = {};
    let counter = 1;
    let first = 0;
    let last = message.length - 1;

    while(first < last) {
        let cache = message[first];
        message[first] = message[last];
        message[last] = cache;
        console.log({cache, message});
        first++;
        last--;
    }
    console.log({message})
    return message;
}

console.log(reverseWords(message).join(''));