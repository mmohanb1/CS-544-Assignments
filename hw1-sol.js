function rmPrefixSufix(str, m, n) {
    
    return m >= 0 && n>= 0 ? str.slice(m, str.length-n):'Invalid input';
}
function applyToEvens(list, func){
    const nArr = list.filter(a => a%2 == 0);
    return nArr.map(func);
}
function productOdds(list){
    const p=1;
    return list.filter(a => a%2 != 0).reduce((prev, curr) => prev*curr, p);
}
function strIndexesStr(s, ...indexes){
    return Array.from(indexes, a => s[a]).toString().replaceAll(',','');
}
function selector(obj, selector){
    const arr = selector.split('.')
    const elems = Array.from(arr.slice(1, arr.length)).reduce((acc, e, i) => acc.concat(acc.at(-1)[e]) ,[obj[arr[0]]]);
    return elems[elems.length-1];
}
/*console.log(rmPrefixSufix("twas brillig and the slithy toves",-1,-4));*/
/*console.log(applyToEvens([1,2,3,4,5,6,7],n => n*2));*/
/*console.log(productOdds([]));*/
//console.log(strIndexesStr('Hello World',-1,-2));
console.log(selector({a: [1, {b: 22}], c: 33, d: {f: {m: {s: {x: -32}}}}}, 'd.f.m.s.x'));
