function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let Petval = input.substr(0,4) // Stores first 4 characters of the string
    let Userval= input.substr(5) // Stores rest of the string
    let result = ''; // Placeholder for validation result
    var circle = document.getElementById('circle');

    //Function to check whether the string contains a letters and numbers 
    function onlyLettersAndNumbers(Str) {
        return /^[A-Za-z0-9]*$/.test(Str);
    }

    // Validation logic to check whether the strings contains pet_ and has letters and numbers following 
    if (Petval == 'pet_' && onlyLettersAndNumbers(Userval) == true ) {
        result = 'Valid Syntax'
        document.getElementById('result').innerText = result;
    
        circle.style.backgroundColor = "green";
        
    } else {
        result = 'Invalid Syntax'
        document.getElementById('result').innerText = result;
        
        circle.style.backgroundColor = "red";
    }

    circle.style.visibility = 'visible';


}


