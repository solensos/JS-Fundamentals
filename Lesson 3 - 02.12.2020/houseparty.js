function houseParty(list) {
    let guests = [];

    for (let i = 0; i < list.length; i++) {
        console.log('list[i]: ', list[i])
        const command = list[i].split(" ");
        let guestName = list[i].split(" ").shift();

        if (command.includes("not")) {
            console.log('Command includes not')
            if(guests.includes(guestName) === true) {
                const indexOfGuestToRemove = guests.indexOf(guestName);
                console.log('Deleting guest: ', guests[indexOfGuestToRemove])
                guests.splice(indexOfGuestToRemove, 1)
                console.log('guestName ', guestName)

                // delete guests[indexOfGuestToRemove]
                break;
            }
            console.log(`${guestName} is not in the list!`);
        } else if(guests.includes(guestName)) {
            console.log(`${guestName} is already in the list!`);
        } else {
            guests.push(guestName);
        }
    }
    console.log(guests.join("\n"));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
