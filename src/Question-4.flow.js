//@flow
const countHandShake = (people: number) => {
    let handshake: number = 0
    for (let indexCol: number = people; indexCol >= 0; indexCol--) {
        for (let indexRow: number = 1; indexRow < indexCol; indexRow++) {
            handshake++
        }
    }
    return handshake
}

console.log(countHandShake(5))
