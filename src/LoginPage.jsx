import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react'
import FormValidation from './FormValidation';
import Style from './Login.module.css'

const LoginPage = () => {
    const navigate=useNavigate();

    let[creds,setCreds]=useState({
        email:"",
        password:""
    })
    let {email,password}=creds;
    let [error,setError]=useState("")
    let [showpassword,setPassword]=useState(false);
    

    let handleSubmit = (e) =>{
        e.preventDefault();
        const message = FormValidation(email,password)
        if(message){
            setError(message)
            return;
        }
        setError("");
        console.log("Login successful:",creds);
        navigate("/dashboard");
        
    }

    let handleCreds = (e) =>{
        let {name,value}=e.target
        setCreds({...creds,[name]:value})
    }
  return (
    <>
    <div className={Style.container}>
        <h2 className={Style.title}>Login</h2>
        {error && <p className={Style.error}>{error}</p>}
        <form onSubmit={handleSubmit} noValidate>
            <div className={Style.formControl}>
                <label htmlFor="email">Email : </label>
                <input className={Style.input} type="email" id="email"placeholder='example@gmail.com' name="email" value={email} onChange={handleCreds}/> 
            </div>
            <div className={Style.formControl}>
                <label htmlFor="pass">Password : </label>
                <div className={Style.passwordAndHideButton}>
                    <input className={Style.input} type={showpassword?"text":"password"} id="pass" name="password" value={password} onChange={handleCreds}/> 
                    <button className={Style.toggleBtn} type="button" onClick={()=>setPassword(!showpassword)}>{showpassword?"Hide":"show"}</button>
                </div>
            </div>
            <button className={Style.button} type="submit">Login</button>
    </form>  
    </div> 
    </>
  )
}

export default LoginPage