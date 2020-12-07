/*
    1. Sort by length
    2. Sort by alphabetical value
    3. Somehow mix both sortings by some kind of magic?
 */

function sortingByCriterias(array){

    let firstSorted = array.sort((a, b) => a.length - b.length)

    let firstSorted2 = array.sort((a, b) => {
        return a.length - b.length
    })

    let sortedByBoth = array.sort((firstElement, secondElement) => {
        console.log(`firstElement: ${firstElement} secondElement: ${secondElement}`)

        if(firstElement !== secondElement) {
            console.log(`Comparing by length`)

            return firstElement.length - secondElement.length
        } else {
            /*
                1. Get the first letter of our 2 elements
                2. Compare the 2 letters
             */
            console.log(`Comparing alphabetically`)

            /*
                For homework: Change the code so that it's case-insensitive.
                Do some kind of magic to transform firstLetter and secondLetter both into capital letters or into small(?) letters.
             */
            let firstLetter = firstElement.charAt(0)
            let secondLetter = secondElement.charAt(0)

            let sortAlphabeticallyResult = firstLetter < secondLetter; // Here we check which letter comes first in the alphabet , value should be true or false.

            if(sortAlphabeticallyResult === true) {
                return 1
            } else {
                return -1
            }
        }
    })

    return sortedByBoth.join("\n")
}

console.log(`Our Result is:\n${sortingByCriterias(["test", "Deny", "omen", "Default"])}`)
