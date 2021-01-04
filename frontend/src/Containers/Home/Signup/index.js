import React from 'react';
import './style.css'
import {signup} from "../../../helper/auth/index"
import {useState} from "react";

const Signup = ()=> {

    const [values,setValues] = useState({
        name : "",
        email : "",
        password : "",
        phone: "",
        error : "",
        success: false
    }); 
     
    const {name , email , password, phone , error , success} = values;

    const mychangeHandler = name => event =>{
         setValues({...values,  [name]: event.target.value})
    }
    const submitHandler = event =>{
        event.preventDefault();
        setValues({...values,error:false})
        signup({name,email,phone,password})
        .then(data=>{
            
                setValues({
                    ...values,
                    name : "",
                    email : "",
                    password : "",
                    phone: "",
                    error : "",
                    success: true 
                })
        })
        .catch(console.log("ERROR IN SIGNUP"));
        
        alert("values submitted")
    }

    
    return (
        <div className="signUp">
            <div className="leftSignIn">

            </div>
            
            <div className="formContainer">
                  <div className="formInner">
                  <p id="para">
                   Signup For The Canvas 360 
                  </p><br/><br/><br/>
                 <form onSubmit={submitHandler}>           {/*  using React forms for SignIn process  */}
                   <lable>Full Name</lable>
                   <input type="text" name="name" onChange={mychangeHandler("name")} value={name} />
                   <br/><br/>
                   <lable>Enter Email</lable>
                   <input type="text" name="email" onChange={mychangeHandler("email")} value={email}/>
                   <br/><br/>
                   <lable>Contact Number</lable>
                   <input type="text" name="phone" onChange={mychangeHandler("phone")} value={phone}/>
                   <br/><br/>
                   <lable>Enter Password</lable>
                   <input type="password" name="password" onChange={mychangeHandler("password")} value={password}/>
                   <br/><br/>
                   <input type="submit" id="btn"/>
                </form>
                
                  </div>
             </div>
        </div>
            
       )
}

export default Signup