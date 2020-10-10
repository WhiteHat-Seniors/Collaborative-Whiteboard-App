import React from 'react';
import './style.css'

class Signup extends React.Component{

    constructor(){
        super();
        //using state to maintain the input fields of the user who is signing in  
          this.state={
              name:'',
              email:'',
              phone:'',
              password: ''
          }
          this.mychangeHandler=this.mychangeHandler.bind(this);
    }
    submitHandler = (event) => {
        // displaying the alert message for the comformation of the form input
        alert(`name:${this.state.name} email:${this.state.email} phone:${this.state.phone}`);
    }
    mychangeHandler(event){
       let nam = event.target.name;
       let val = event.target.value;
   // using setState to track the changes in the input fields
        this.setState({
            [nam]:val
        });
    }
    render(){
        return (
         <div className="signUp">
             <div className="leftSignIn">

             </div>
             
             <div className="formContainer">
                   <div className="formInner">
                   <p id="para">
                    Signup For The Canvas 360 
                   </p><br/><br/><br/>
                  <form onSubmit={this.submitHandler}>           {/*  using React forms for SignIn process  */}
                    <lable>Full Name</lable>
                    <input type="text" name="name" onChange={this.mychangeHandler} />
                    <br/><br/>
                    <lable>Enter Email</lable>
                    <input type="text" name="email" onChange={this.mychangeHandler} />
                    <br/><br/>
                    <lable>Contact Number</lable>
                    <input type="text" name="phone" onChange={this.mychangeHandler} />
                    <br/><br/>
                    <lable>Enter Password</lable>
                    <input type="password" name="password" onChange={this.mychangeHandler} />
                    <br/><br/>
                    <input type="submit" id="btn"/>
                 </form>
                   </div>
              </div>
         </div>
             
        )
    }
}

export default Signup