import React from "react";
import { Form, Input, Button, DatePicker, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { auth } from "../firebase_config";
import { app } from "../firebase_config";
import { Firestore } from "../firebase_config";
import {onAuthStateChanged} from 'firebase/auth'
export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  // const uid = auth.currentUser.uid;

  console.log(registerEmail);
  console.log(registerPassword);
  //console.log(uid);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
// console.log(Firestore)
  const register = () => {
    auth
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then(
        Firestore.collection("ProfileDetails").doc().set({
          email:registerEmail,
          // uid: user.user.uid,
        })
      )
      .then(navigate("/"));
  };
  return (
    <div className="form">
      <div className="signup">
        {" "}
        <p className="head">Meta</p>
        <p>A Social App</p>
        <h1>Sign Up Form</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item label="Select Date Of Birth">
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email@",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
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
                setRegisterPassword(event.target.value);
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
              onClick={register}
            >
              Sign Up
            </Button>
            Or <Link to="/">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
