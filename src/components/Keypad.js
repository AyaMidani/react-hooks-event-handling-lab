// Code Keypad Component Here
import React from "react";

function Keypad() {
function handleChange(){
    console.log("Entering password...")
}
  return (
        <input
        type="password"
        name="search"
        onChange={handleChange}
        placeholder="Enter search term..."
      />
  );
}

export default Keypad;