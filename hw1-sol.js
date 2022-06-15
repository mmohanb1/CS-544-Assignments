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
//    return Array.from(indexes, a => s[a]).toString().replaceAll(',','');
    return Array.from(indexes, a => s[a]).join('');
}
function selector(obj, selector){
    const arr = selector.split('.')
    const elems = Array.from(arr.slice(1, arr.length)).reduce((acc, e, i) => acc.concat(acc.at(-1)[e]) ,[obj[arr[0]]]);
    return elems[elems.length-1];
}
function lineAt(str, n)
{
  if(str.charAt(n) === '\n' || n < 0 || n >= str.length) return '';

  const s1 = str.slice(0, n+1);
  const s2 = s1.slice(s1.lastIndexOf('\n')+1, n+1);
  const s3 = str.slice(n+1, str.length);
  const s4 = s3.slice(0, s3.indexOf('\n') === -1 ? s3.length : s3.indexOf('\n'));

  return s2.concat(s4);

}
function fixedLengthLines(str, len){
const arr = str.split('\n')
const arr1= arr.map(x => x.length < len ? x.padEnd(len) : x.slice(0, len))
  return Array.from(arr1.slice(1,arr1.length)).reduce((prev, curr, i) => (prev.concat(curr).concat('\n')) ,arr1[0].concat('\n')).toString();
}
function oddLengthLines(str){

  return str.split('\n').map(x => x.length%2 !== 0 ? x.concat('\n') : '').join('');

}
function fizzBuzz(n){
    return Array.from({length: n}, (e, i) => i+1).map(x => (x%3 === 0 && x%5 === 0)? 'fizz buzz' : x%3 === 0 ? 'fizz' : x%5 === 0 ? 'buzz' : x);
}
function range(n, init=0, inc=1){
   return Array.from({length: n}, (e, i) => init+i*inc);
}
/*console.log(rmPrefixSufix("twas brillig and the slithy toves",-1,-4));*/
/*console.log(applyToEvens([1,2,3,4,5,6,7],n => n*2));*/
/*console.log(productOdds([]));*/
//console.log(strIndexesStr('Hello World',1,2,6));
//console.log(selector({a: [1, {b: 22}], c: 33, d: {f: {m: {s: {x: -32}}}}}, 'd.f.m.s.x'));
//const str = '01\n012\n0123\n01234\n'
//console.log(fixedLengthLines(str,2));
//console.log(selector({a: [1, {b: 22}], c: 33}, 'd'));
//console.log(fizzBuzz(50));
console.log(range(4,3));
