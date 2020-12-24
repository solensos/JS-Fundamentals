function nonDecreasingSubsequence(input){
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let firstElement = input[i];
        let secondElement = input[i + 1];

        if (firstElement < secondElement){
            newArr.push(firstElement)
        } 

        
    }

    console.log(newArr);
}
nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24])