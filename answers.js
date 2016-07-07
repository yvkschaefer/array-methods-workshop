/*## Exercise 1
Write a function called `printPositives` that takes an array and uses the `forEach` method to 
**print** only the positive numbers.*/
/*
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
*/




/*## Exercise 2
Similar to the previous exercise, write a function called `getPositives` that takes an array and 
uses the `filter` method to **return a new array** with only the positive numbers.*/



var arr = [2,5,-7,6,-98,65];

var getPositives = function(array){
    return array.filter(function(element){
        if (element > 0){
            return element;
        }
    })    
}

console.log(getPositives(arr));