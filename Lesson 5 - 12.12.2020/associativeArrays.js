const associativeArray1 = {
    'Gohsko': '0888123123',
    'Peshko': '0888321321',
    'Pencho': '0881111111'
}

const nomeraNaPeshko1 = associativeArray1['Peshko'];
const nomeraNaPeshko2 = associativeArray1.Peshko;
console.log('nomeraNaPeshko1 ', nomeraNaPeshko1)

const associativeArray2 = {};
associativeArray2.Goshko = '0888123123'
associativeArray2.Peshko = '0888321321'
associativeArray2.Pencho = '0881111111'

const nomeraNaPeshko3 = associativeArray2['Peshko'];
console.log('nomeraNaPeshko2 ', nomeraNaPeshko2)

function getValueFromKey(key) {
     // You cannot do associativeArray1.key
     return associativeArray1[key];
}

console.log(getValueFromKey('Peshko'))
console.log(getValueFromKey('Goshko'))


console.log('Iterating through keys of associativeArray1')
for(let key in associativeArray1) {
    console.log('key ', key)
    console.log('key ', associativeArray1[key])
}

function renameKey(associativeArray, oldKeyName, newKeyName) {
    associativeArray[newKeyName] = associativeArray[oldKeyName]
    delete associativeArray[oldKeyName] // delete keyword works only for Object!
}
