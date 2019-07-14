const wordBreak = function(s, wordDict) {
    if (wordDict.length === 0) return false;
    if (wordDict.length === 1) return s === wordDict[0];

    let queue = [''];
    let memo = new Map();

    while (queue.length > 0) {
        const val = queue.shift();
        for (let word of wordDict) {
            const searchWord = `${val}${word}`;
            const startsWith = s.indexOf(searchWord) === 0;
            if (searchWord === s) {
                return true;
            } else if (!memo.has(searchWord) && startsWith) {
                memo.set(searchWord, true);
                queue.push(searchWord);
            }
        }
    }

    return false;
};




const  s = "applepenapple";
const wordDict = ["pen", "apple"];

console.log(wordBreak(s,  wordDict));

