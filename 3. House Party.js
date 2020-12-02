function houseParty(list){
    let guests = [];

    for (let i = 0; i < list.length; i++) {
        let command = list[i].split(",");
        command = list[i].split(" ");
        let guestName = list[i].split(" ").shift();

        if (command.includes("not")){
            if(guests.includes(guestName) === true){
                delete guests[guestName]
                break;
            }
            console.log(`${guestName} is not in the list!`);
        } else if(guests.includes(guestName)){
            console.log(`${guestName} is already in the list!`);
        } else {
            guests.push(guestName);
        }
    }
        console.log(guests.join("\n"));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)