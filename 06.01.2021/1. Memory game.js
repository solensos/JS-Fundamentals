function memoryGame(input){
    let sequence = input.shift();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        
        let firstNumber = Number(command[0]);
        console.log(`all fisrt numbers ${firstNumber}`);
        console.log(`first numbers ${sequence[firstNumber]}`);
        let secondNumber = Number(command[1]);
        console.log(`second numbers ${sequence[secondNumber]}`);

        // if (sequence[firstNumber] === sequence[secondNumber]){
        //     console.log(` ${i}Congrats! You have found matching elements - ${(sequence[firstNumber])}!`);
        // } else if(sequence[firstNumber] !== sequence[secondNumber]){
        //     console.log(`${i}Try again!`);
        // } else if (command[0] === 'end' && input.length < 2){
        //     console.log(`${i} Sorry you lose :('`);
        //     console.log(sequence.join(''));
        // } else {
        //     console.log(`You have won in ${i} turns!`);
        // }
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])