import React, { useState } from "react";
import { Input, Row, Col, Divider, Button, Typography } from "antd";

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const NewName = ({ addSong }) => {
  const [fName, setTitle] = useState("");
  const [lName, setLname] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addSong(fName, lName);
    setTitle(" ");
    setLname(" ");
  };
  // const[count,setCount]=useState(3);
  return (
    <form onSubmit={handleSubmit} {...layout}>
      <Title level={3}>Info Form</Title>
      <Row gutter={[24, 24]}>
        <Col span={6}>First Name</Col>
        <Col span={12}>
          <Input
            size="large"
            type="text"
            value={fName}
            required
            onChange={e => setTitle(e.target.value)}
            placeholder="First Name"
          />
        </Col>
      </Row>
      <Row>
        <Col span={6}>Last Name</Col>
        <Col span={12}>
          <Input
            size="large"
            type="text"
            value={lName}
            required
            onChange={e => setLname(e.target.value)}
            placeholder="Last Name"
          />
        </Col>
      </Row>
      <Divider />
      {/* <p>{count}</p> */}
      {/* onClick={()=>setCount(count+1)} */}
      <Button type="primary" htmlType="submit">
        Add Details
      </Button>
    </form>
  );
};
export default NewName;
