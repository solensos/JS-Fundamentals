function dungeonGame(input){
    let health = 100;
    let newArr = input.toString()
    newArr = newArr.replaceAll('|', ",")
    newArr = newArr.split(",")
    let coins = 0;

    for (let i = 0; i < newArr.length; i++) {
        let item = newArr[i].split(' ')
        let command = item[0].split(' ');
        let points = Number(item[1])

        if(command == 'potion'){
            health += points;
            if (health <= 100){
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                health -= health - 100
                console.log(`You healed for ${points} hp.`);
                console.log('Current health: 100 hp.');
            }
        } else if (command == 'chest' && health > 0){
            console.log(`You found ${points} coins.`);
            coins += points
        } else {
            if (health > 0){
                console.log(`You slayed ${command}.`);
                health -= points;
            } else if (health <= 0){
                console.log(`You died! Killed by ${command}."`);
                console.log(`Best room: ${i}`);
            }
        }

    }

    if (health > 0){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
dungeonGame(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])