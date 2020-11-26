function train(inputArray) {
    console.log('We start with input: ', inputArray)

    let wagons = inputArray.shift().split(" ").map(Number);
    let maxPassengersPerWagon = inputArray.shift().split(" ").map(Number);
    let amountOfPassengersLeftToSplitAmongWagons = 0;

    console.log('We start with wagons: ', wagons)
    console.log('Max passengers per wagon: ', maxPassengersPerWagon)

    // Here we will add the additional wagons, that have been added with the 'Add N' commands
    inputArray.forEach(element => {
        let command = element.split(" ");

        if (command.length > 1) {
            console.log(`Adding a new wagon with ${command[1]} passengers`)

            wagons.push(Number(command[1]))
        }

        if(command.length === 1) {
            amountOfPassengersLeftToSplitAmongWagons += Number(command)
        }
    })

    console.log('Amount of passengers, that we have to fit among all wagons: ', amountOfPassengersLeftToSplitAmongWagons)

    // Here we will fit the additional passengers to the existing wagons
    for (let i = 0; i < wagons.length; i++) {
        let passengersInCurrentWagon = wagons[i];

        if ((passengersInCurrentWagon + amountOfPassengersLeftToSplitAmongWagons) < maxPassengersPerWagon) {
            console.log(`Adding ${amountOfPassengersLeftToSplitAmongWagons} passengers to wagon ${passengersInCurrentWagon}, the wagon might not be full yet!`)

            passengersInCurrentWagon += Number(amountOfPassengersLeftToSplitAmongWagons)
            amountOfPassengersLeftToSplitAmongWagons = 0;
        } else {
            let spaceLeftUntilFull = maxPassengersPerWagon - passengersInCurrentWagon;

            passengersInCurrentWagon += Number(spaceLeftUntilFull)
            amountOfPassengersLeftToSplitAmongWagons -= spaceLeftUntilFull

            console.log(`Adding ${spaceLeftUntilFull} passengers to wagon ${wagons[i]}, the wagon is full now! Passengers left to fit among other wagons: ${amountOfPassengersLeftToSplitAmongWagons}`)
        }

        wagons[i] = passengersInCurrentWagon;
    }

    return wagons.join(' ')
}
console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']));
