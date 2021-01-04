import React from 'react';
import Header from '../../Components/Header';
import Infobar from '../../Components/Infobar';
import Pillbutton from '../../Components/Pillbutton';
import './style.css'

const Home = () => {
return(
  <div >
     {/* giving values to the props fields of navbar or header */ }
     <Header               
     one="Home"         
     onelink="/"

     two = "Canvas"

     three="Colleborate"
     
     four = "Log In"
     fourlink = "/login"
     />
    <div className="homeContent">
    <div className="content">
       
    <br/>
        <span className="special">Canvas</span><br/>         {/* the hero area of the home page */}
         The most cool Canvas with brillient features on internet 
        <br/> <br/>
        <Pillbutton />                            {/*the pill button for the sign in process */}
     </div>
     <br/><br/><br/><br/>
     <div className="illus">
            {/* here is the illustration  */}
     </div>
    </div>
     <Infobar />
  </div>
)
}

export default Home