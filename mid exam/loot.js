function loot (input){
    let newArr = input.shift().split("|")
    let command = []
    

   
    while(command !== "Yohoho!"){
        let [command, index1, index2, index3] = input.split(" ");
        if (command === "Loot"){
            ;
            if (!(newArr.includes(index1))){
                newArr.unshift(index1)
            }
            if (!(newArr.includes(index2))){
                newArr.unshift(index2)
            }
            if (!(newArr.includes(index2))){
                newArr.unshift(index3)
            }
        }
        if (command === "Drop"){
            let temp = newArr.slice(index1)
            newArr.push(temp)
        }
        if (command === "Steal"){
            newArr.pop()

        }


    }

    console.log(newArr);


}
loot((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
)