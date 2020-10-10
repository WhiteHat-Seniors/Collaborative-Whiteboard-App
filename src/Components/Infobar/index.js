import React from 'react';
import './style.css'
import collab from '../../Assets/collaborate (2).svg'
import saveWork from '../../Assets/floppy-disk.svg'
import canvas from '../../Assets/draw.svg'

const Infobar = () => {
return(
  <div className="infoBar">           {/* Infobar for displaying the special features of the website */}
        <div className="items">                
                <div className="itemIcon">
                        <img src={collab} alt="icon-1" />       {/*icon 1 */}
                </div>
                <br/>
                <div className="itemContent">Collaborate</div>      
        </div>
        
        <div className="items">
                <div className="itemIcon">
                         <img src={saveWork} alt="icon-2" />        {/*icon 2 */}
                </div>
                <br/>
                <div className="itemContent">Start from Where you left off</div>
        </div>
        
        <div className="items">
                <div className="itemIcon">
                          <img src={canvas} alt="icon-3" />           {/*icon 3*/}
                </div>
                <br/>
                <div className="itemContent">Save Canvas</div>
        </div>
  
  </div>
)
}

export default Infobar