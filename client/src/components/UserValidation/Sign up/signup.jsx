import React from 'react';
import Ellipse1 from '../images/image1.png';
import Ellipse2 from '../images/image3.png';
import Dots from '../images/image2.png';
import "./signup.css";
const Signup = ()=>{
    return (
      <div className="main-container">
          <img src={Ellipse1} className="Ellipse1"alt="" />
          <img src={Ellipse2} className="Ellipse2" alt="" />
          <div className="rectangle">
            <div className="details">
              
              <h1>Logo</h1>
               <h3>Create New Account</h3>
               <input type="text" defaultValue="MailId"/><br></br>
               <br></br>
               <input type="text" defaultValue="password"/><br></br>
               <br></br>
               <input type="text" defaultValue="confirm password"/><br></br>
               <br></br>
              <button className="button1">Sign up</button>
              <div className="Dots1">
              <img src={Dots} alt="" />
              </div>
              <div className="Dots2">
              <img src={Dots} alt="" />
              </div>
            </div>

          </div>
     </div>
    );
}
export default Signup;