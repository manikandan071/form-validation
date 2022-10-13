
let btn=document.getElementById("btn"),
userName=document.getElementById("username"),
userEmail=document.getElementById("email"),
userfirstPassword=document.getElementById("firpassword"),
usersecondPassword=document.getElementById("secpassword");

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setError(a,b){
    let getprnt=a.parentNode;
    console.log(getprnt);
    console.log(b);
    let small=getprnt.querySelector('small');
    console.log(small);
    getprnt.className='error';
    small.innerText=b;
}
function setSuccess(a){
    let getprnt=a.parentNode;
    getprnt.className='success'
}

function formControl(){
    let getuserName=userName.value,
    getuserEmail=userEmail.value,
    getuserfirPassword=userfirstPassword.value,
    getusersecPassword=usersecondPassword.value;
    if(getuserName === ""){
        setError(username,"Enter Name");
    }
    else{
        setSuccess(userName);
    }

    if(getuserEmail === ""){
        setError(email,"Enter email");
    }
    else if (!isEmail(getuserEmail)) {
        setError(email, 'Not a valid Email');
    }
    else{
        setSuccess(email);
    }
    if(getuserfirPassword === ""){
        setError(firpassword,"Enter Password");
        if(getusersecPassword === ""){
            setError(secpassword,"Enter Password");
        }
    }
    else if(getuserfirPassword !== getusersecPassword){
        setError(secpassword,"Enter same Password");
    }
    else if(getuserfirPassword === getusersecPassword){
        setSuccess(secpassword);
    }
}

btn.addEventListener("click",function(){
    console.log(userName.value);
    console.log(userEmail.value);
    console.log(userfirstPassword.value);
    console.log(usersecondPassword.value);
    formControl();
})
