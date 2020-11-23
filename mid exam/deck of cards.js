function deckOfCards(input){
    let array = input.shift().split(",")
    let num = +input.shift()
    
    for(let i = 0; i < num; i++){
        let el = input[i].split(', ').length
        if (el == 2){
            let [command,cardName] = input[i].split(', ')
            switch(command){
                case "Add":
                    if(array.includes(cardName)){
                        console.log("Card is already bought");
                    }else {array.push(cardName)
                        console.log("Card successfully bought"); 
                    }
                break;
                case "Remove":
                    if(array.includes(cardName)){
                        let n = cardName - 1
                        array = array.splice(cardName[i])
                        console.log("Card successfully sold");
                    } else {
                        console.log("Card not found");
                    }
                    break;
                    
                case "Remove At":
                    cardName = Number(cardName);
                    if (cardName <= array.length){
                        let n = array.indexOf(cardName)
                        array = array.splice(cardName,n)

                        console.log("Card successfully sold");
                    } else {
                        console.log("Index out of range");
                    }

                    break;
            }
        } else {
            let [command,index,cardName] = input[i].split(', ');
            index = Number(index);
            switch(command){
                case "Insert":
                    if (index <= array.length){
                        if (array.includes(cardName)){
                            console.log("Card is already bought")
                        } else {
                            array.push(cardName);
                            console.log("Card successfully bought")
                        } 
                    } else {
                        console.log("Index out of range");
                    }
                break;
            }
            
        }
        
    }
    console.log(array.join(","));
   
    
}
deckOfCards(["T 34, T 34 B, T92, AMX 13 57",
"4",
"Add, T 34",
"Remove, AMX CDC",
"Insert, 10, M60",
"Remove At, 1"])