function distinctArray(numbers){
    let newNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (!newNumbers.includes(numbers[i])){
            newNumbers.push(numbers[i])
        } 
        
    }

    // let unique = numbers.filter(function(element,index,self){
    //     return index === self.indexOf(element)
    // })

    console.log(newNumbers.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])