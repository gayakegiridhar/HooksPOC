import React, { useState, useEffect } from "react";
import NewName from "./NewName";

const NameList = () => {
  const [details, setdetails] = useState([
    { fName: "Girish", lName: "Gayake", id: 1 },
    { fName: "VVk", lName: "Patil", id: 2 },
    { fName: "Shri", lName: "Ghorpade", id: 3 }
  ]);
  const addSong = (fName, lName) => {
    setdetails([...details, { fName, lName, id: 0 }]);
  };

  useEffect(() => {
    console.log("USeEffect Run", details);
  });
  return (
    <div className="song-list">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        <tr>
          <td>
            {details.map(detail => {
              return <ol key={detail.id}>{detail.fName} </ol>;
            })}
          </td>
          <td>
            {details.map(detail => {
              return <ol key={detail.id}>{detail.lName} </ol>;
            })}
          </td>
        </tr>
      </table>
      <NewName addSong={addSong} />
    </div>
  );
};
export default NameList;
