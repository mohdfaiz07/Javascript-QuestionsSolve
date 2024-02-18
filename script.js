////////////////////////////////////question no.1 ////////////////////////////////


 // write a function which calculate the sum of pass numbers in parameter.
/*
let numbers = [2,3,4,5,6,7,1]

function sumNumbers (num){
    let sum = 0;
    
    for(let i = 0; i<numbers.length; i++){
        sum += num[i]
    }

    return sum;
}

const result = sumNumbers(numbers)
console.log(result)

*/

////////////////////////////////////question no.2 ////////////////////////////////


2 // write a function which calulate sum of any numbers in parameter

/*
function calculateSum (...num){
    let sum = 0;

    for(let i= 0; i<num.length; i++){
        sum += num[i]
    }
    return sum ;
}

console.log(calculateSum(2,3,5,10))

calculateSum(2,4,5,6)

*/
////////////////////////////////////question no.3 ////////////////////////////////

3// write a function which calulate sum of any numbers in parameter but first & second num
// is 2,4 and after that i can give as many numbers

/*

function calculateSum (num1,num2,...num){
    sum = num1 + num2;

    for(let i= 0; i<num.length; i++){
        sum += num[i]
    }
    return sum;

}

console.log(calculateSum(2,4,20,22))

*/

////////////////////////////////////question no.4 ////////////////////////////////

//  Write a JavaScript function that takes a positive integer
//  as a parameter and calculates the sum of its digits.

/*
function sumDigit (num){
    var strArr = String(num).split("")
    console.log(`${strArr} ${ typeof strArr}`)
    let sum = 0;

    for( i = 0; i<strArr.length; i++){
        sum += parseInt(strArr[i])  
     
    }
    return sum;

}

console.log(sumDigit(536))

*/


///////////////////////////////////question no.5/////////////////////////////////////

//Write a JavaScript function that takes a string as input and
// returns the reversed version of the string. For example:
/*

function reverseString(str){
var newStr = str.split("").reverse().join("")
return newStr
}

console.log(reverseString("helllo "))

*/

////////////////////////////question no. 6/////////////////////////////////////////////

//Write a JavaScript function that takes an array of numbers
// as input and returns the largest element in the array.
/*

function findLargeNum (arr){
    let largeNum = arr[0];

    for(let i = 1; i<arr.length; i++ ){
        if(largeNum < arr[i]){
            largeNum = arr[i]
        }
    }
    return largeNum
}

const newArr = [2,4,33,99,999]

const largestNum = findLargeNum(newArr)
console.log(largestNum)

*/
//////////////////////2nd type//////////////////////////////////
/*
var array = [2,5,222,666,11,99]
function largestArrElement (arr){
   let largeElement =  Math.max(...arr)

   return largeElement

}

console.log(largestArrElement([2,4,6,7,8,9]))
console.log(largestArrElement(array))

*/

////////////////////////////question no. 7/////////////////////////////////////////////

//Write a JavaScript function that takes an as many of numbers
// as input and returns the smallest element in the array.

/*

function findSmallestNum (...num){
    let smallestNum = num[0];

    for(let i= 1; i<num.length; i++){
        if(smallestNum>num[i]){
            smallestNum = num[i]
        }
    }

    return smallestNum;

}

console.log(findSmallestNum(12,5,7,9))

*/

////////////////////////////////////question no. 8//////////////////////////////////////

/*
function isPalindrome (str){

    var cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    console.log(cleanstr)
    var checkstr = cleanstr.split("").reverse().join("")
    console.log(checkstr)

   return  cleanstr === checkstr


}

console.log(isPalindrome("anna"));
console.log(isPalindrome("racecar")); // Should output true
console.log(isPalindrome("hello")); // Should output false
console.log(isPalindrome("A man a plan a canal Panama"));

*/



///////////////////////////////////////////////question 9/////////////////////////////////////////

// Write a JavaScript function that takes a string as input and returns the count of 
// vowels in the string. Consider both lowercase and uppercase vowels.

/*

function conutVowels (str){
    let lowerStr = str.toLowerCase()
    console.log(lowerStr)
    vowels = ["a", "e", "i", "o", "u"];

   let checkStr =  lowerStr.split("").filter(char=>vowels.includes(char))
    console.log(checkStr)

     let checkStrLength = checkStr.length
     return checkStrLength


}

console.log(conutVowels("HElllooo"))

*/

///////////////////////////////////////////////question 10/////////////////////////////////////////

// make a function that print table of any number.
/*
function tableOf(num){

    for(let i = 1; i<11; i++){
        console.log(`${num} * ${i} = ${num * i}`)
    }

}
tableOf(2)

*/

///////////////////////////////////////////////question 11/////////////////////////////////////////

//  given a string, reverse each word in the sentence.

/*
    let str = 'how are you';

   const reversedString =  str.split(' ').map( (word)=> word.split('').reverse().join('') )
    console.log(reversedString.join(' '))



*/


///////////////////////////////////////////////question 12/////////////////////////////////////////

//12. Write a function that checks whether the argument passed to it is an
//  array or not and returns true if it's an array and false otherwise 

/*
function checkArray (input){
   return Array.isArray(input)

}

console.log(checkArray([]))
console.log(checkArray('hello'))
console.log(checkArray({}))

*/

///////////////////////////////////////////////question 13/////////////////////////////////////////
// 13. empty an array using loop.

/* using loop
let arr = [1,2,3,4,5,6]

for(i = arr.length-1 ; i>=0; i--){
    arr.pop()
    console.log(i)
  
}
console.log(arr)

*/
/* without loop
1
let arr = [1,2,3,4,5,6]
arr.length = 0
console.log(arr)

2
let arr1 = [1,2,3,4,5,6]
arr1 = []
console.log(arr1)

*/


///////////////////////////////////////////////question 14/////////////////////////////////////////

// 14. write a function that  check number is integer or not

/*
function checkInteger(num){
    if(num%1 === 0){
        console.log(`its integer`)
    }
    else{
        console.log('its not integer')
    }

}

checkInteger(10.1)

or
console.log(Number.isInteger(10.2))

*/

///////////////////////////////////////////////question 15/////////////////////////////////////////
// 15. write a function that dublicate the array value.

//condition 1 dont create new array.
/*
let arr1 = [1,2,3,4,5];

function dublicateArr (arr){
  arr.map( (val)=> arr.push(val))
}

dublicateArr(arr1)
console.log(arr1)

*/

//condition 2  create new array.

/*
let arr1 = [1,2,3,4,5];

function dublicateArr (arr){
 const newArr = arr.concat(arr)
    // or 
    // const newArr = [...arr1, ...arr1 ]

 return newArr
}

console.log(dublicateArr(arr1))
*/

///////////////////////////////////////////////question 16/////////////////////////////////////////

// 16. Write a function that reverse a number.

// condition 1 without loop
/*   
function reverseNumber(num){
      const reversedNum =  String(num).split('').reverse().join('')
           return Number(reversedNum)
    }

   console.log( reverseNumber(21))

*/
// condition 1 with loop


function reverseNumber(num){
    


}





///////////////////////////////////////////////////Question no = 6  /////////////////////////////////////////////////////


// find the factorial ---

/*
function findFactorial (num){


    let result = 1;

    for (i = 1; i<= num; i++){
        result *= i

    }

return result;    

}

console.log(findFactorial(0))


*/

/*
function checkPrime(num){
    let arr = [];
    for (let i=1; i<=num; i++){
        if(num % i === 0 ){
            arr.push(i)
        }

    }

    if(arr.length === 2) {
         return true;
     
    } else {
        return false;
     }

    
}

console.log(checkPrime(5))

*/

////////////////////////////////////////feebonachhii/////////////////////////
/*
function feebonachhii( num ){
let arr = [0,1]

for(let i = 2; i<num; i++){
    let result = arr[i-1] + arr[i-2]
    arr.push(result)

}

return arr 


}


console.log(feebonachhii(8))

*/










