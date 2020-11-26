function train(arr){
    let wagon =  arr.shift().split(" ").map(Number);
    let passPerWagon = arr.shift().split(" ").map(Number);

    
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i].split(" ");
        if (el.length > 1){
            wagon.push(Number(el[1]))
        } else {
            for (let j = 0; j < wagon.length; j++) {
                let pasangers = Number(wagon[j]);
                if ((pasangers + el) < passPerWagon){
                    pasangers += Number(el)
                    
                    
                } else{
                    
                }
            }
        }

    }


}
console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']));