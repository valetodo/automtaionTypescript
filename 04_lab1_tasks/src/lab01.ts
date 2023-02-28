export function palindrome(word: string): boolean {
    word = word.replace(/ /g, '').toLowerCase()
    let newWord: string = "";
    for (let i = word.length - 1; i >= 0;  i--) {
        newWord = newWord.concat(word[i])
    }
    return word === newWord;
}

export function getHighestNumber (listNumber: number[]) : number {
    let highestNumber: number = 0
    for (let number of listNumber) {
        highestNumber = (number > highestNumber) ? number :highestNumber;
    }
    return highestNumber;
}

export function getListString(word: string): string[] {
    let toList: string[] = []
    for (let i = 0; i < word.length; i++) {
        toList.push(word[i])
    }
    return toList;
}
