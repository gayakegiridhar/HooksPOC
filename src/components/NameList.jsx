import React, { useState, useEffect } from "react";
import NewName from "./NewName";
import { Table, Divider } from "antd";
import "antd/dist/antd.css";
import { Typography } from "antd";

const { Title } = Typography;

const NameList = () => {
  const [details, setdetails] = useState([
    { fName: "Girish", lName: "Gayake", id: 1 },
    { fName: "VVk", lName: "Patil", id: 2 },
    { fName: "Shri", lName: "Ghorpade", id: 3 }
  ]);
  const addSong = (fName, lName) => {
    setdetails([...details, { fName, lName, id: 0 }]);
  };
  const columns = [
    {
      title: "First Name",
      dataIndex: "fName",
      key: "fName"
    },
    {
      title: "Last Name",
      dataIndex: "lName",
      key: "lName"
    }
  ];

  useEffect(() => {
    console.log("USeEffect Run", details);
  });
  return (
    <div className="song-list">
      <NewName addSong={addSong} />
      <Divider />

      <Title level={4}>Added information in Table</Title>
      <Table columns={columns} dataSource={details} />
      {/* <table>
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
      </table> */}
    </div>
  );
};
export default NameList;
