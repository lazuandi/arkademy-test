//@flow

const countCharinWord = (word: string, char: string) => {
    const charFromWord = word.split('')
    let result: number = 0
    for (let index: number = 0; index < charFromWord.length; index++) {
        if (charFromWord[index] === char) {
            result++
        }
    }
    return result
}

console.log(countCharinWord('bootcamp', 'o'))
