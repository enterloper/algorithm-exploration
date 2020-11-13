const lengthOfLongestSubstring = s => {
    let start = 0;
    let longest = 0;
    let alreadyVisited = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (alreadyVisited[char]) {
            start = Math.max(start, alreadyVisited[char])
        }
        longest = Math.max(longest, (i - start + 1));
        alreadyVisited[char] = i+1 
    }
    
    return longest;
};

const testCases = [
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    ""
];

testCases.forEach(test => console.log(lengthOfLongestSubstring(test)));


