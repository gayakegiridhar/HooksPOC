import React, { useState } from "react";

const NewName = ({ addSong }) => {
  const [fName, setTitle] = useState("");
  const [lName, setLname] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addSong(fName, lName);
    setTitle(" ");
    setLname(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>New Name:</label>
      <input
        type="text"
        value={fName}
        required
        onChange={e => setTitle(e.target.value)}
        placeholder="First Name"
      />
      {"     "}
      <input
        type="text"
        value={lName}
        required
        onChange={e => setLname(e.target.value)}
        placeholder="Last Name"
      />
      <input type="submit" value="Add Details" />
    </form>
  );
};
export default NewName;
