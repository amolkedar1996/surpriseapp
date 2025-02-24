import React, { useState } from "react";

const Surprise = () => {
  const [surprise, setSurprise] = useState("");

  const surprises = [
    "🎉 Surprise! You've unlocked a dance party! 💃🕺",
    "🦄 A unicorn just appeared! 🦄",
    "🚀 You’re now a space explorer! 🪐",
    "🥳 You won a virtual trophy! 🏆",
    "🎨 It’s time to paint your masterpiece! 🎨",
    "🐱 Here’s a cute cat gif! 🐱"
  ];

  const getRandomSurprise = () => {
    const randomIndex = Math.floor(Math.random() * surprises.length);
    setSurprise(surprises[randomIndex]);
  };

  return (
    <>
        <div style={{textAlign:"center",width:"400px",height:"400px",backgroundColor:"green",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
      {surprise && <div style={{ marginTop: "20px", fontSize: "18px",color:"#FFFFFF" }}>{surprise}</div>}
      <button type="button" onClick={getRandomSurprise} style={{cursor:"pointer",border:"0px",marginTop:"100px",padding:"10px",color:"white",backgroundColor:"orange"}}>
        Surprise Me
      </button>
      </div>
    </>
  );
};

export default Surprise;
