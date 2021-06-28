// var i = 1;
// var factorial = 1;
// while(i <= 7){
//     factorial = factorial * i;
//     i++;
// }
// console.log(i, factorial);
//for loop
// var factorial = 1
// for(var i = 1; i<=10; i++){
//     factorial = factorial * i;
   
// }
// console.log(i, factorial);
// function factorial(n){
//     var factorial = 1
//     for(var i = 1; i <= n; i++){
//         factorial = factorial * i;
    
//     }
//     return factorial;
// }
// var result = factorial(50);
// console.log(result);

function factorial(n) {
    var i = 1;
    var fact = 1;
    while(i<= n){
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial(8);
console.log(result);