import React from 'react';
import './style.css'
import plus from "../../Assets/plus.jpg"
const Newbutton = () => {
return(
  <div>
      <div className="newButton">
          <a href="#">
              <img src={plus} className=""></img>
          </a>
      </div>
  </div>
)
}

export default Newbutton