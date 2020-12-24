function coffee(input){
    let list = input.shift().toString().split(' ')
    let count = input.shift();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let token = command[0]
        
        if (token == 'Include'){
            list.push(command[1])
        } else if (token == 'Remove'){
            if (command[1] == 'first'){
                list.splice(0,command[2])
            } else {
                list.pop()
            }

        } else if (token == 'Prefer'){
            let temp = list[command[1]];
            list[command[1]] = list[command[2]];
            list[command[2]] = temp;
        } else if (token == 'Reverse'){
            list.reverse()
        }
 
    }

    
    console.log("Coffees:");
    console.log(list.join(" "));

}
coffee([
    'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
    '5',
    'Include TurkishCoffee',
    'Remove first 2',
    'Remove last 1',
    'Prefer 3 1',
    'Reverse'
  ]
  )