import React , {useState} from 'react';
import './style.css'
import {Link , Redirect} from 'react-router-dom'
import {login,isAuthenticate,authenticate} from "../../../helper/auth/index"

const Login = ()=>{

  const [values, setValues] = useState({
     email : "",
     password : "",
     error : "",
     loading : false,
     didRedirect : false
  })
  
  const {email , password ,error , loading  , didRedirect} = values 
  
   const {user} = isAuthenticate();

  const changeHandler = name => event =>{
      setValues({...values, error: false, [name]:event.target.value});
  }
  
  const mySubmitHandler = (event)=>{
  event.preventDefault();
  setValues({...values,error:false, loading:true});
  login({email, password})
   .then(data=>{
      if(data.error)
      {
         setValues({...values ,error: data.error , loading:false,didRedirect: false })
      }
      else{
         authenticate(data, ()=>{
            setValues({
               ...values,
               email : "",
               password : "",
               error : "",
               loading : false,
               didRedirect:true
            });
         });
      }
   })
   .catch(console.log("lgin failed"))
  }

  const performRedirect = () =>{

   //Todo ........
     if(didRedirect){
       
      return (
         <Redirect to="/canvas" />
      )

       setValues({
          ...values,
          didRedirect: false
       })
     }

     if(isAuthenticate())
     {
        //see here we have to do something-------
     }
  }
  const loadingMessage = () =>{
     return (
        loading && (
           <div>
              <h2>loading.....</h2>
           </div>
        )
     )
  }
   
  const errorMessage= ()=>{
   return (
      <div style={{display: error ?"":"none"}}>
   {error}
</div>
   )
  } 

   const logInForm = ()=>{
      return (
         <div className="logIn">
             <div className="leftHalf">
                
             </div>
              <div className= "form">
                 <br/>
                 <h3 style={{fontWeight:"lighter" , fontSize:"32px"}}>Login to canvas 360</h3>
               <br/> <br/>
                 <form 
                 >       {/*using the React forms */}
                    <br/>
                    <label >enter your Email</label>
                    <input value={email} type="text" name="email" onChange={changeHandler("email")}/> <br/> <br/> <br/>
                    
                    
                    <label >enter your password</label>
                    <input value={password} type="password" name="password" onChange={changeHandler("password")} />
                    
                    <br/>
                    <br/><br/>
                    
                    <input onClick={mySubmitHandler} type="submit" id="btn" />  
                    <span id="text"> <br/><br/>
                    
                    <p>didn't have a account then <Link to="/signup">Sign up</Link></p> 
                    </span>
                 </form> 
              
                 <p>{JSON.stringify(values)}</p>
             </div>
    </div>
      )
   }
   
   return (
      <div>
        
         {errorMessage()}
         {logInForm()}
         {loadingMessage()}
         {performRedirect()}
      </div>
   )

}

export default Login