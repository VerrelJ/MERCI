document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    var username = document.getElementById("username").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;

    var pass = document.getElementById("pass").value;

    var age = document.getElementById("age").value

    if (username.length < 8){
        alert("Username must be 8 character or more");
        return;
    }

    if (email.length < 1){
        alert("email need to be fill");
        return;
    }
    
    else if (!validateEmail(email)){
        alert("Email is invalid");
        return;
    }

    if(!alphaNum(password)){
        alert("password is invalid");
        return;
    }

    if(!conPass(password, pass)){
        alert("password is not the same");
        return;
    }

    if(!overage(age)){
        alert("age must be 17 or above");
        return;
    }

    var res = confirm("Are you sure you want to register?");

    if(res){
        alert("Registration Confirmed");
        return;
    }else{
        alert("Registration Cancelled");
    }

    function validateEmail(email){
        return (email.indexOf("@") != -1) && (email.endsWith(".com"))
    }

    function alphaNum(password){
        var length = password.length
        var isNumeric = false;
        var isAlphabet = false;
        for (let i = 0; i<length; i++){
            var charcode = password.charCodeAt(i);
            if(!isNaN(password[i])){
                isNumeric = true;
            }
            if(Alp(charcode)){
                isAlphabet = true;
            }
        }
        if(isNumeric && isAlphabet){
            return true;
        }else{
            return false;
        }
    }
    
    function Alp(char){
        return (char >= 65 && char<=90) || (char>=97 && char<=122)
    }

    function conPass(password, confPass){
        if(password.length!=confPass.length){
            return false;
        }else{
            for (let i = 0; i<password.length; i++){
                if(password.charCodeAt(i)!=confPass.charCodeAt(i)){
                    return false;
                }
            }
        }
        return true;
    }

    function overage(age){
        if(age < 17){
            return false;
        }else{
            return true;
        }
    }
})