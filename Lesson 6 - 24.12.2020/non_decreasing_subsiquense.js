function nonDecreasingSubsequence(input) {
    console.log(`input: ${input}`)

    let currentBiggestOne = 0;

    let result = input.filter(currentElement => {
        // if(/* I want to keep currentElement in the array */) {
        //     return true;
        // }
        // else if(/* I don't want to keep currentElement in the array*/) {
        //     return false
        // }

        if(currentElement > currentBiggestOne) {
            currentBiggestOne = currentElement;
            return true;
        }
    })

    console.log(result);

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    words.forEach(word => {
        console.log(word.length > 6)
    })

    const result2 = words.filter(word => word.length > 6);

    const result3 = words.filter(word => {
        if(word.length > 6) {
            return true
        }
    })
}
nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
