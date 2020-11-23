function pirats(arg1,arg2,arg3){
    let days = Number(arg1);
    let plunderPerDay = Number(arg2);
    let expectedPlunder = Number(arg3);
    let plunderGained = 0;
    

    for (let i =1; i <= days; i++){
        plunderGained += plunderPerDay;
        if (i % 3 == 0){
            plunderGained += plunderPerDay * 0.5;
        }
        if (i % 5 == 0){
            plunderGained -= plunderGained * 0.3;
        }
    }

    if (plunderGained >= expectedPlunder){
        console.log(`Ahoy! ${plunderGained.toFixed(2)} plunder gained.`);  
    } else {
        let percentage =  ((plunderGained / expectedPlunder) * 100).toFixed(2)
        console.log(`Collected only ${percentage}% of the plunder.`);
    }

}
pirats(10,20,380)