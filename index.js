
const buttonElement=document.getElementById("notify-btn");
const emailElement=document.querySelector("input[type='email']");
const italic=document.createElement("i");
italic.classList.add("invalid-p");
const invalidEmailText=document.createTextNode("Please provide a valid email address");
const emptyEmailText=document.createTextNode("Whoops! It looks like you forgot to add your email");


window.document.forms[0].addEventListener('submit',(e) => {

       checkValidation(e);
})


function checkValidation(e){

    let valid=true;
    const emailData=emailElement.value;
    const emailLength=emailData.length;
    if(emailLength===0){

      italic.appendChild(emptyEmailText);
      valid=false;

    } else if(!emailData.endsWith("@email.com")){

      italic.appendChild(invalidEmailText);
      valid=false;

    }
    if(!valid) {
  e.preventDefault();
      invalidEmailStyle();
    }

    
}
    

function invalidEmailStyle() {

    emailElement.style.borderColor="red";
    emailElement.setAttribute("placeholder","example@email/com");
    emailElement.after(italic);


}

emailElement.addEventListener('focus',() =>{

resetEmailFiled();

})

function resetEmailFiled(){

    const invalidParagraph=document.querySelector(".invalid-p");

    if(invalidParagraph!==null){
    invalidParagraph.remove();
    emailElement.value="";
    emailElement.style.borderColor="hsl(0, 0%, 59%)";
    emailElement.setAttribute("placeholder","Your email address...");
    }
    

    
}

