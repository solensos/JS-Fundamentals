function sortingByCriterias(array){
   
    let firstSorted = array.sort((a, b) => a.length - b.length)
    return firstSorted.join("\n")

}
console.log(sortingByCriterias(["test", "Deny", "omen", "Default"]))