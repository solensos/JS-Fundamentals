function train(arr){
    let wagons =  arr.shift().split(" ").map(Number);
    let maxPassengerPerWagon = arr.shift().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        if(commands.length > 1){
            wagons.push(+commands[1])
        } else{
            let passengersToAdd = Number(commands[0]);
            for(let j = 0; j < wagons.length; j++){
                if ((passengersToAdd + wagons[j]) <= maxPassengerPerWagon){
                    wagons[j] += passengersToAdd
                    break;
                } 
            }
        }
    }
    return wagons.join(" ")
}
console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']));