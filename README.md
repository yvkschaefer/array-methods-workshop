# DecodeMTL Array methods workshop

As a reference throughout this workshop, make sure to use [the MDN documentation for `Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Operational instructions
Fork this repository to your own GitHub and clone your fork in your work environment.

Create a file called `answers.js` which will hold your answers.

As soon as you do the first exercise, commit it, push it and **create a pull request**.

After each exercise make sure to commit/push this way we can monitor your progress in the pull request.

**NOTE**: You don't need to reset your `answers.js` file. Keep growing the file with each exercise, and make sure to add a comment so we know which exercise we are looking at.

## Exercise 1
Write a function called `printPositives` that takes an array and uses its `forEach` method to **print** only the positive numbers.

## Exercise 2
Similar to the previous exercise, write a function called `getPositives` that takes an array and uses its `filter` method to **return a new array** with only the positive numbers

## Exercise 3
Write a function called `filterArray` that takes an array AND a function as arguments. Your `filter` function should return a new array that contains only the elements where the passed function returns a truthy value.

**NOTE**: You are allowed to use `Array.prototype.filter` to answer this question.

**NOTE 2**: This is a bit of a trick question, the answer is a one-liner :)

## Exercise 4
Write a function called `longestWord` that takes a string as argument, and returns the longest word in the string. You should use `Array.prototype.reduce` to do your work.

**Hint**: You can use `String.prototype.split` to split the string into an array of words.

## Exercise 5
Write a function called `countVowels` that takes a string and returns the number of vowels in the string. You should use `Array.prototype.reduce` to do your work.

**Hint**: You can use `String.prototype.split` again. There is a way to use it to split a string by character. Try to Google it :)

**Hint 2**: You can create an array of vowels and use `Array.prototype.indexOf` to check if the current letter is a vowel.

## Exercise 6
Write a function called `highLow` that takes an array of numbers, and returns an object with a property `highest` containing the highest number, and a property `lowest` containing the lowest number, using `Array.prototype.reduce`.

For example, starting with `[1, -10, 20, 40, 5]`, your function should return `{highest: 40, lowest: -10}`.

**Hint**: Javascript has a special value called `Infinity`, which is higher than any other number. See if you can initialize your reduce accumulator with `Infinity` and `-Infinity` :)

## Exercise 7
Expanding on exercise 6, write a function called `highLowTwo` that takes an array of numbers, and returns the higest, second highest, lowest, and second lowest numbers.

For example, starting with `[1, -10, 20, 40, 5]`, your function should return:

```json
{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
```

## Exercise 8
Write a function called `countChars` that takes a string, and returns an object where the keys are letters, and the value is the number of times that letter appears.

For example, with input "hello world", the output should be:

```json
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
```

**NOTE**: Unlike arrays, objects don't have any ordering on them. When you print your object on the console, your keys may be displayed in a different order, and it does not matter.

## Exercise 9
Start or continue the activity [Functional programming in JavaScript](http://reactivex.io/learnrx/).
