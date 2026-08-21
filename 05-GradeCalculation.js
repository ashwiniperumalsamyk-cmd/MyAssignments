function calculateGrade(score){ //Create a function that takes a student's score as a parameter.
    switch(true){ // used a switch statement inside a function
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        case score >= 50:
            return "E";
        default:
            return "F";
    }

}
let studentScore = 65; //Declare and initialize the variable
let grade = calculateGrade(studentScore); // Call the function
console.log("Student Score: " ,studentScore);
console.log("Grade:" ,grade);





