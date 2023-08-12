//2 marks
//do by own, hint or typing
//for reusing function for another arguments
//NUR PAPER CARC CAB HL 

import React from "react";

function Cab(){
      function greet() {
        console.log(this.animal, "typically sleep between", this.sleepDuration);
      }
      
      const obj = {
        animal: "cats",
        sleepDuration: "12 and 16 hours",
      };
      
      greet.call(obj); // cats typically sleep between 12 and 16 hours      

    return(
        <div>
            Cab
        </div>
    )
}

export default Cab;