import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  //Routes,
  //Route,
  Link,
  useNavigate,
  //BrowserRouter,
} from "react-router-dom";
import { auth } from "../firebase_config";
import { useState } from "react";

export default function LoginForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(Email, Password);
// console.log(auth)
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const login = () => {
    auth.signInWithEmailAndPassword(Email,Password)
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    })
    .then(alert('login Sucess'))
    .then(navigate('/home'))
         }

  ;
  return (
    <div className="form">
      <div className="login">
        <p className="head">Meta</p>
        <p>A Social App</p>
        <h1>Login Form</h1>
        <Form
          name="login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={login}
            >
              Log in
            </Button>
            Or <Link to="signup">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

//export default LoginForm();
