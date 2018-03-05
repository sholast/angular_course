function isLetter(char: string) {
    return /^[a-zA-Z]+$/.test(char);
}

export default function revert(word: string) {
    return word.replace(/[a-zA-Z]+\S*[a-zA-Z]+/g, (str) =>  {
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