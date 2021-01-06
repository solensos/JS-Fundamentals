function lift(input){
    let peopleWaiting = Number(input.shift());
    let maxPassengers = 4;
    let wagons = input.shift().split(" ").map(Number);
    let counter = peopleWaiting;

    for (let i = 0; i < wagons.length; i++) {
        
        if(peopleWaiting <= maxPassengers){
            wagons[i] += peopleWaiting;
            break;
        } else if ((maxPassengers + wagons[i]) >= maxPassengers){
            let difference = maxPassengers - wagons[i]
            wagons[i] += difference;
            peopleWaiting -= difference;
        } else {
            wagons[i] += maxPassengers
            peopleWaiting -= maxPassengers
        }         
       
    }

    if ((wagons.length * maxPassengers) >= counter){
        console.log(`The lift has empty spots!`);
        console.log(`${wagons.join(' ')}`);
    } else {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(`${wagons.join(' ')}`)
    }
    
}
lift([
    "15",
    "0 0 0 0 0"
   ])