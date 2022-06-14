function rmPrefixSufix(str, m, n) {
    
    return m >= 0 && n>= 0 ? str.slice(m, str.length-n):'Invalid input';
}
function applyToEvens(list, func){
    const nArr = list.filter(a => a%2 == 0);
    return nArr.map(func);
}
/*console.log(rmPrefixSufix("twas brillig and the slithy toves",-1,-4));*/
console.log(applyToEvens([1,2,3,4,5,6,7],n => n*2));
