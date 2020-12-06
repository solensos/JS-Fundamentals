function filterFunction1(element,index,self) {
    return index === self.indexOf(element)
}

const filterFunction2 = (element,index,self) => index === self.indexOf(element)

function distinctArray(numbers){
    let newNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!newNumbers.includes(numbers[i])){
            newNumbers.push(numbers[i])
        }

    }

     /*
        Tova e komentar na nqkolko reda
        Tuk pokazvame mnogo razlichni nachini da izpolzvame funkciqta filter()
        Vsichki primeri po-dolu pravqt edno i sushto neshto, prosto napisano po razlichen nachin.
     */

    console.log('Array numbers: ', numbers)
    let unique = numbers.filter(function(element,index,self) {
        // self v sluchaq e raven na numbers
        // element e poredniqt element ot masiva
        // index e индексът na element-a
        console.log('Current element: ', element)
        console.log('Current index: ', index)
        console.log('numbers.indexOf(element): ', self.indexOf(element))

        return index === self.indexOf(element)
    })

    let unique2 = numbers.filter((element, index, self) => index === self.indexOf(element))

    let unique3 = numbers.filter((element, index, self) => {
        // Losh nachin za console.log !!!!
        // console.log(element)
        // console.log(index)
        // console.log(self)
        return index === self.indexOf(element)
    })

    let unique5 = numbers.filter(filterFunction1)

    let unique6 = numbers.filter(filterFunction2)

    let unique7 = numbers.filter((element,index,self) => filterFunction2(element,index,self))

    console.log(newNumbers.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
