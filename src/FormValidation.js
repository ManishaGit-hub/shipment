

const FormValidation = (email,password) => {
   
    if(!email || !password){
        return "Email and password are required.";
    }

    if(!email.includes("@")||!email.includes(".")){
        return "Please enter a valid email format."
    }

    if(email.indexOf(".") < email.indexOf("@")){
        return "Please enter a valid email format."
    }

  return ""
}

export default FormValidation