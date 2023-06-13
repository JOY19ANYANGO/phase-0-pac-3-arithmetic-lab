var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function add (a,b){
    return a+b;
}
function subtract(a ,b){
    return a-b;
}
function multiply(a ,b){
    return a*b;
}
function divide(a ,b){
    return a/b;
}
function increment(a){
    return a+1
}
function decrement(a){
    return a-1
}
function makeInt(a){
    return parseInt(a)
}
function  makeInt(n){
    return parseInt(n,10)
}
function preserveDecimal(n){
    return parseFloat('2.222')
}
function  preserveDecimal(a){
    return parseFloat(a)
}