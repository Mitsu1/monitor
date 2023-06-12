//import React, { useEffect } from "react";

const CheckBoxButton = () => {

   return (
      <>
      <div className="section">
         
         <div className="steps">
            <div className="step-item is-completed is-success">
               <div className="step-marker">
                  <span className="icon"><i className="fa fa-check" /></span>
               </div>
               <div className="step-details">
                  <p className="step-title">Step 1</p>
                  <p>This is the first step of the process.</p>
               </div>
            </div>
            <div className="step-item is-active">
            <div className="step-marker"></div>
               <div className="step-details">
                  <p className="step-title">Step 2</p>
               </div>
            </div>   
         </div>
      </div>
      </>
   );
}
export default CheckBoxButton;