function tseamAccount(input){
    let account = input.shift().split(' ');
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command =  tokens[0];
        let gameName = tokens[1]
        
        switch(command){
            case 'Install': 
                account.push(gameName);
                break;
            case 'Uninstall':
                if (account.includes(gameName)){
                    let index = account.indexOf(gameName)
                    account.splice(index,1)
                }
                break;
            case 'Update': 
                if (account.includes(gameName)){
                    let index = account.indexOf(gameName)
                    let removed = account.splice(index,1).toString()
                    account.push(removed)
                }
                break;
            case 'Expansion':
                let element = gameName.split('-')
                let match = element[0];
                let expansion = element[1]
                if (account.includes(match)){
                    let indexOfMatch = account.indexOf(match)
                    account.splice(indexOfMatch + 1,0,(`${match}:${expansion}`))
                }
                break;
            case 'Play!':
                break;

        }

    }   
    console.log(account.join(' '));
  
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])