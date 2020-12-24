function tseamAccount(input){
    let account = input.shift().split(' ');
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command =  tokens[0];
        let gameName = tokens[1]
        
        if (command !== 'Play!') {
            if (command === 'Install'){
                account.push(gameName)
            } else if (command === 'Uninstall'){
                if (account.includes(gameName)){
                    let index = account.indexOf(gameName)
                    account.splice(index,1)
                }
            } else if (command === 'Update'){
                if (account.includes(gameName)){
                    let index = account.indexOf(gameName)
                    let removed = account.splice(index,1)
                    account.push(removed)
                    console.log(account);
                }
            } else if (command === 'Update'){

            }

        } 


    }   

    // console.log(account);
            
        
        
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])