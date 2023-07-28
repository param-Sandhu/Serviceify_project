// This check for a valid email in the form xx@xx.xx
function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
    requiredField(); // If a valid input is provided, it check for a non empty name field.
    }
    else
    {

    alert("You have entered an invalid email address!");// It gives an alert if an invalid email is entered.
    document.form1.text1.focus();
    return false;
    }
}

function requiredField(){
    // This gets the input name by the user.
    var unmLength = document.getElementById('u-name').value;

    if (unmLength == ''){
        // It gives an alert if the field is empty.
        alert("Please enter a name!");
        return false;
    } else{
        document.cform.uemail.focus();
        return true;
    }
}
