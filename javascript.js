function validate(e) {
    e.preventDefault();
    const email=document.getElementById
    ("email").value;
    const password=document.getElementById
    ("pass").value;
var msg=document.getElementById("message")
let message='';
if(email ==='')
    {
message = 'please enter an email.';
}else if (password ===''){
    message='password must have atleast 10 characters.';
}
else{
    message='LOGIN SUCCESSFUL';
    }
    msg.innerText=message;
}