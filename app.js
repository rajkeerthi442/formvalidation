const form=document.querySelector('#form')
const username=document.  querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword ');
let success=true;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!validateInput()){
        e.preventDefault();
    }
})
function validateInput(){
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim(); 
    if(usernameval===''){
        success=false;
        seterror(username,'username is required')
    }else{
    setsuccess(username)
    }
    if(emailval===''){
        success=false;
        seterror(email,'email is required')
    }
    else if(!validateEmail(emailval)){
        success=false;
        seterror(email,'please enter a valid email');
    }
    else{
        setsuccess(email)
    }
    if(passwordval==''){
        success=false;
        seterror(password,'passsword is required');
    }
    else if(passwordval.length<8){
        success=false;
        seterror(password,'password must be atleast 8 characters long')
    }
    else{
        setsuccess(password)
    }
    if(cpasswordval===''){
        seterror(cpassword,'confirm password is required')
    }
    else if (cpasswordval!==passwordval){
        seterror(cpassword,'password does not match')
    }
    else{
        setsuccess(cpassword)
    }
    return success;
}
function seterror(element,message){
    const inputGroup=element.parentElement;
    const errorelement=inputGroup.querySelector('.error');
    errorelement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setsuccess(element){
    const inputGroup=element.parentElement;
    const errorelement=inputGroup.querySelector('.error');
    errorelement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
 
