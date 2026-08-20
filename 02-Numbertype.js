function checkNumber(number){
    if (number > 0){
        return "Positive";
    } else if (number < 0){
        return "Negative";
    } else {
        return "Neutral";
    }
    }

let num = 7;// declared and Initialized the variable
console.log(checkNumber(num)); // called the function and print it 

