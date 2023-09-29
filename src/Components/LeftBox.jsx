import React from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div style ={{ border:"1px solid red"}}>
      {/* Add input for bill */}
      <input type="number" value={bill} />
      <input type="number" value={handleTip} />
      <input type="number" value={handleBill} />
      
      {/* Add buttons for % of tip */}
      <buttun>5%</buttun>
      <buttun>10%</buttun>
      <buttun>15%</buttun>
      <buttun>25%</buttun>
      <buttun>50%</buttun>

      {/* Add input for no.of peoples */}
      <input type="number" value={handlePeople}/>
      <input type="number" value={people} />
    </div>

  );
};

export default LeftBox;
