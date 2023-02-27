import React, { useState } from "react";

function Selection(props) {
  let [background, setBackground] = useState({ background: "" });
  return (
    <div className="fix-box" onClick={()=>{props.applyColor(setBackground)}} style={background}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;
