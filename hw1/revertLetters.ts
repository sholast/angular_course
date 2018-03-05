function isLetter(char: string) {
    return /^[a-zA-Z]+$/.test(char);
}

function isWhitespace(char: string) {
    return /^\s+$/.test(char);
}

function revert(word: string) {
    return word.replace(/[a-zA-Z]+.*[a-zA-Z]+/, (str) =>  {
        const arr = str.split('');
        for (let i = 0; i < arr.length / 2; i++) {
            if (isLetter(arr[i]) && isLetter(arr[arr.length - i - 1])) {
                let acc = arr[i];
                arr[i] = arr[arr.length - i - 1];
                arr[arr.length - i - 1] = acc;
            }
        }
        return arr.join('');
    });

}

function revertLetters(text: string) {
    let result = '';
    let acc = '';
    for (let i = 0; i < text.length; i++) {
        if (isWhitespace(text[i])) {
            result = acc.length ? result.concat(revert(acc)) : result;
            result = result.concat(text[i]);
            acc = '';
        } else {
            acc = acc.concat(text[i]);
        }
    }
    return acc.length ? result.concat(revert(acc)) : result;
}