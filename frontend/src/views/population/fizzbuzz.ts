export const fizzBuzz = (value: number) => {
    const returnArray = []
    for (let i = 1; i <= value; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            returnArray.push('fizzBuzz')
            continue
        }
        if (i % 3 === 0) {
            returnArray.push('fizz')
            continue
        }
        if (i % 5 === 0) {
            returnArray.push('buzz')
            continue
        }
        returnArray.push(i.toString())
    }

    return returnArray
}
