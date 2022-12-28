import React from 'react';
import Ellipse1 from '../images/image1.png';
import Ellipse2 from '../images/image3.png';
import Dots from '../images/image2.png';
import {Link} from "react-router-dom";


const Signin = ()=>{
return(
         <div className="main-container">
                  <img src={Ellipse1} className="Ellipse1" alt=""/>
                  <img src={Ellipse2} className="Ellipse2" alt=""/>
                  <div className="rectangle">
                           <div className="details">
                                  <h1>Logo</h1>
                                  <h4>Enter your credentials to access your account</h4>
                                  <input type="text" defaultValue="MailId"/><br></br>
                                  <br></br>
                                  <input type="text" defaultValue="password"/><br></br>
                                  <br></br>
                                  <button className="button1">Sign in</button>
                                  <Link to="/Signup"><button className="button2">Sign up</button></Link>
                             <div className="Dots1">
                                  <img src={Dots} alt=""/>
                               </div>
                          <div className="Dots2">
                             <img src={Dots} alt=""/>
                     </div>
                </div>
          </div>
     </div>
)
}
export default Signin;