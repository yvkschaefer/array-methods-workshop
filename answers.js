/*## Exercise 1
Write a function called `printPositives` that takes an array and uses the `forEach` method to 
**print** only the positive numbers.*/

var arr = [1,2,3,4,5,-5,-60];
var positives = []
var printPositives = function(arr){
    arr.forEach(function(num){
        if (num > 0){
            positives.push(num)
        }
    })
}

printPositives(arr)
console.log(positives);