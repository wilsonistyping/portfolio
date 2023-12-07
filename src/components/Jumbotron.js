import React from "react";
import "../css/Jumbotron.css";
import Typewriter from "typewriter-effect";
// putting typewriter documentation here for quick reference: https://www.npmjs.com/package/typewriter-effect

const Jumbotron = () => {
  return (
    <div class="jumbotron">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("wilsonistyping")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default Jumbotron;
