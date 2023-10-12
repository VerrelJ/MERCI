document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    var username = document.getElementById("username").value;

    var password = document.getElementById("password").value;

    if (username.length < 1){
        alert("Username must be fill");
        return;
    }

    if(!alphaNum(password)){
        alert("password is invalid");
        return;
    }

    var res = confirm("Do you want to login?");

    if(res){
        alert("Login Confirmed");
        return;
    }else{
        alert("Login Cancelled");
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
})