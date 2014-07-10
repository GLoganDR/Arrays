var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log(chalk.blue('this is blue text'));
console.log(chalk.blue.bgRed.bold('Hello world'));
console.log(chalk.green('I am a green line ' + chalk.blue.bgRed('different') + ' back to green'));

var evens = [2,4,6,8];
console.log(evens);
console.log(chalk.red(evens[1]));

//for(var i = 0; i <10; i++){<-- This is how we do a loop//
//console.log(chalk.black(i));
//}


for(var i = 0; i <10; i++){  //<-- This is how we d a loop that shows only evens//
  if(i%2 === 0){             //<-- This is a "mod" function to print only evens//
    //even                   //The mod function divides the number by even numbers to determine remainder to find if it is even or odd/
                             //If there is a remainder, it is odd, if it's even, it's red//
    console.log(chalk.red(i));
  }else{ //<-- This says otherwise, if it's odd, make them blue colored//
    //odd
    console.log(chalk.cyan(i));
  }
}

for(var j = 0; j <= evens.length -1; j++){  //<-- This statement says to make only evens print out.//
  
  console.log('evens -> ' + evens[j]);
}

var response = prompt('Enter a number or (q)uit: ');
var numbers = []; //<--Array[]//

while(response != 'q'){//<-- != means does not equal. as long as the response is not q, do this loop//
  response = parseFloat(response); //<-- makes the response of user into a number//
  numbers.push(response); //<-- puts numbers into the Array
  response = prompt('Enter a number or (q)uit: ');
  
}
console.log(numbers); //<--makes it work//

var sum = 0  //<-- defines the sum variable to 0 so it can have something to make it a number//
sum = parseFloat(sum)// <-- This makes it a number that uses decimals. Int makes it an integer, this allows for decimals if the user decides to put decimals into the array//

for(var q = 0; q < numbers.length; q++){// <-- defines a variable "q" and sets the loop. Since I know how many times I want to loop (whatever is in the array) we say "for" to start loop (var "q" is set to equal 0, then say "q" needs encompass however many number is in the array, then "q"++ //
  sum += numbers[q]//<-- This means add numbers in the array (index q) to sum. Sum becomes equal to whatever is in the array added together//
}

  console.log('The sum of your numbers is-> ' + sum); //<--makes it work//


