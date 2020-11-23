const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
undefined
const result = words.filter(itemAtCurrentIndexFromWords => {
   if(itemAtCurrentIndexFromWords.length > 6) {
       console.log(itemAtCurrentIndexFromWords, " has length > 6, so it will be stored in result")
       return true;
   }
   else {
      console.log(itemAtCurrentIndexFromWords, " has NOT length > 6, so it will NOT be stored in result")
      return false;
   }
});

console.log(result);
