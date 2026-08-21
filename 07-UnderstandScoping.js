let genderType ="female"; // decalred a global varaiable
function printGender(){ // create a function named print gender
    let color ="brown";//Inside the function, declare a *function-scoped* variable color with value "brown" using let.
    if(genderType==="female"){//Check whether genderType starts with "female"
       var age = 30; // Declare a variable age = 30 using *var*.
       let color = "pink";//Create a *block-scoped* variable color = "pink" using let.
       console.log("color inside if-block :" ,color); // print the color inside if-block
    }
    console.log("age outside if-block:" ,age);//print the age outside if block


}
printGender(genderType)

