import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'

const Pillbutton = () => {
return(
  <div className="pillBtn">
     <span className="pill">
         <Link to="/signup">Sign up</Link>     
     </span>
  </div>
)
}

export default Pillbutton