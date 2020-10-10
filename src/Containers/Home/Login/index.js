import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    constructor(){
       super(); 
       // using state to maintain the email and password of user 
       this.state = {
           email : '',
           password: ''
       }
       this.changeHandler=this.changeHandler.bind(this);
    }
    mySubmitHandler = (event) =>{
    // using alert function to display the email and password
      alert(`email is ${this.state.email} and password is ${this.state.password} `)
   }
   changeHandler = (event) => {
       let nam = event.target.name;
       let val = event.target.value;
    // using the setState method to take the data from input
          this.setState({[nam]:val});
   }
  
    render(){

      return (
         <div className="logIn">
             <div className="leftHalf">
                
             </div>
              <div className= "form">
                 <br/>
                 <h3 style={{fontWeight:"lighter" , fontSize:"32px"}}>Login to canvas 360</h3>
               <br/> <br/>
                 <form onSubmit={this.mySubmitHandler}>       {/*using the React forms */}
                    <br/>
                    <label >enter your Email</label>
                    <input type="text" name="email" onChange={this.changeHandler}/> <br/> <br/> <br/>
                    <label >enter your password</label>
                    <input type="password" name="password" onChange={this.changeHandler} />
                    <br/>
                    <br/><br/>
                    <input type="submit" id="btn" />  
                    <span id="text"> <br/><br/>
                    <p>didn't have a account then <Link to="/signup">Sign up</Link></p> 
                    </span>
                 </form> 
             </div>
    </div>
      )
    }
}

export default Login