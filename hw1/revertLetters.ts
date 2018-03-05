function isLetter(char: string) {
    return /^[a-zA-Z]+$/.test(char);
}

function revert(word: string) {
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

console.log(revert('s1tar3t 2 hellow'));
console.log(revert('s1ta$%r3t 2 hel^low'));
console.log(revert('s1tar3t 2   low5'));