
export const emailValidator=(email)=>{
    let emailError="";
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(email.length==0){
        emailError=("email est obligatoire");
    }
    else if(email.length<6){
        emailError=("email doit contenir au moins 6 caractères");
    }
    else if(email.indexOf(' ') >= 0){        
        emailError=("Email ne doit pas contenir de l'espace");                          
    }  
    else if (reg.test(email) === false) {
        emailError=("Email est incorrect");
      }
    else{
        emailError=("")
    }
    return emailError;
}

export const passwordValidator=(password)=>{
    let passswordError="";
    const reg=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    if(password.length==0){
        passswordError=("Mot de passe est obligatoire");
    }
    else if(reg.test(password)===false){
        passswordError=("mot de passe doit contenir au moins 8 caractères, 1 majuscule")
    }else{
        passswordError=("")  
    }
    return passswordError;
}