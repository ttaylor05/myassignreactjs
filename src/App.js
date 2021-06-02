import React from 'react';
import './App.css';

function App() {

  return (
  <>
  <main >
  <div className ="content">
      <h2>Learn to code by watching others</h2>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great but understanding how developers think is invaluable.</p>
   </div>
  
   
   <div className ="rightside">
       
    <div className="head">
         <p>
         <span>Try it free 7 days </span>then $20/mo. thereafter</p>
    </div>

    <fieldset>
       <form id ="form-page">
         <div>
           <input type="text" id="fname" name="fname" placeholder="First Name"></input>
         </div>
         
         <div>
          <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
         </div>

         <div>
           <input type="text" id="email" name="email" placeholder="Email Address"></input>
         </div>

         <div>
          <input type="text" id="pword" name="pword" placeholder="Password"></input>
         </div>
        
        <button class="button2">CLAIM YOUR FREE TRIAL</button>  
          
        <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        
      </form>
    </fieldset>

     </div>

   </main>
  </>




  );
}

export default App;




