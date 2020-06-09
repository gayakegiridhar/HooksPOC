import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Card, Col, Row } from "antd";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const Login = () => {
  const history = useHistory();
  const onFinish = values => {
    if (values.username === "root" && values.password === "root") {
      history.push("/nameList");
    } else {
      alert("Wrong Username and Password");
    }
  };

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Welcome to Login Page">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
