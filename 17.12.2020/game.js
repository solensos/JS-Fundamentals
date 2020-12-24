function game(input){
    let days =  input.shift();
    let players = input.shift();
    let groupsEnergy = input.shift();
    let waterPerPerson = input.shift(); 
    let foodPerPerson = input.shift();
    let watterSupplies = players * waterPerPerson * days;
    let foodSupplies = players * foodPerPerson * days;
    
    for (let i = 0; i < input.length; i++) {
        groupsEnergy -= input[i]
        if (i % 2){
            groupsEnergy += groupsEnergy * 0.05;
            watterSupplies -= watterSupplies * 0.3;
        } else if (i % 3 == 0){
            foodSupplies -= foodSupplies / players;
            groupsEnergy += groupsEnergy * 0.1;
        } 

    }

    if (groupsEnergy > 0){
        console.log(` You are ready for the quest. You will be left with - ${(groupsEnergy.toFixed(2))} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${(foodSupplies).toFixed(2)} food and ${(watterSupplies).toFixed(2)} water.`);
    }


}
game([
    '10',     '7',      '5035.5',
    '11.3',   '7.2',    '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3',  '784.20',
    '321.21', '456.8',  '330',
    ''
  ]
  )