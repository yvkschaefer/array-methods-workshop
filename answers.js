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


/*
var arr = [2,5,-7,6,-98,65];

var getPositives = function(array){
    return array.filter(function(element){
        if (element > 0){
            return element;
        }
    })    
}

console.log(getPositives(arr));
*/



/*## Exercise 2B
Re-do exercise 1 by first filtering the input array, and then printing the numbers from the 
filtered array. 

Your code will look something like: `return arr.filter(...).forEach(...)*/
/*
function printPositive3(array) {
    return array.filter(function(element){
        if (element > 0) {
            return element;
        }
    }).forEach(function(item){
        console.log(item);
    });
}

printPositive3([3, -8, 7,-5,22]);
*/






/*## Exercise 3
Write a function called `filterArray` that takes an array AND a function as arguments. Your 
`filter` function should return a new array that contains only the elements where the passed 
function returns a truthy value.*/

/*
function filterArray(array, aFunction) {
    return array.filter(function(aFunction){
    })
}
*/


/*## Exercise 4
Write a function called `longestWord` that takes a string as argument, and returns the longest word 
in the string. You should use `Array.prototype.reduce` to do your work.*/

//I didn't use Array.prototype.reduce, Codrin seems to think it's k
/*
function longestWord(string){
    var array = string.split(' ');
    return array.reduce(function(a, b){
        if (a.length > b.length){
            return a;
        }
        else {
            return b
        }
    })
}

console.log(longestWord('Hello which one of me willbethe longest word?'));
console.log(longestWord('abcdefghijklmno is bigger'));
*/






/*## Exercise 5
Write a function called `countVowels` that takes a string and returns the number of vowels in the 
string. You should use `Array.prototype.reduce` to do your work.

**Hint**: You can use `String.prototype.split` again. There is a way to use it to split a string 
by character. Try to Google it :)

**Hint 2**: You can create an array of vowels and use `Array.prototype.indexOf` to check if the 
current letter is a vowel.
*/

var vowels = ['a','e','o','u','i', 'y'];

function countVowels(string){
    var array = string.split('');
    return array.reduce(function(counter, char){
        if (vowels.indexOf(char) > -1){
            counter = counter + 1;
        }
        return counter;
    },0);
}

console.log(countVowels('the quick brown fox'));//5