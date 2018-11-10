//@flow
const printTriangeWithNumber = (length: number) => {
    let result: string = ''
    if (length > 10) {
        result = 'the number that inputed must not more than 10'
    } else {
        for (let indexCol: number = 0; indexCol <= length; indexCol++) {
            for (let indexRow: number = 0; indexRow < indexCol; indexRow++) {
                result = result.concat(`${indexRow + 1},\t`)
            }
            result = result.concat('\n')
        }
    }
    return result
}

const heightOfTriangle: number = 8

console.log(printTriangeWithNumber(heightOfTriangle))
