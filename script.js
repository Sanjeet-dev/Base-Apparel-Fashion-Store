const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener=('submit' , (event) => {
    event.preventDefault();
    validate();

})

const validate = () =>{

    const emailVal = email.value;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailVal===""){
        setErrorMsg(email, "Email cannot be empty");
    }
    else if(emailVal.match(pattern)){
        setErrorMsg(email,"No issues with Email");
    }
    else{
        setErrorMsg(email,"Please provide a valid email");
    }

}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const msg = formControl.querySelectorAll('#error-msg');
    formControl.className = "form-control error";
    msg.innerText = errormsgs;
}
