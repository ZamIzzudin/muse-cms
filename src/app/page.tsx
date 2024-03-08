/** @format */

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginIsRequiredClient } from "@util/auth";

import { Form, Row, Col, InputGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import style from "@style/signin.module.css";

const plain = {
  username: "",
  password: "",
};

export default function SignIn() {
  loginIsRequiredClient();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const config = {
      username: data.get("username"),
      password: data.get("password"),
      redirect: false,
    };

    const signInResponse = await signIn("credentials", config);

    if (signInResponse && !signInResponse.error) {
      router.push("/home");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Username or Password is wrong!");
    }
  };
  return (
    <main className="layout">
      {/* <img src={logo} alt="brand logo" width="80%" style={{ marginBottom: '40px' }} /> */}
      <Form className={style.form_login} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="centered my-4">
          <Col>
            <Form.Group>
              <InputGroup>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                {/* <button className={style.show_pass_btn} onClick={() => setShowPass(!showPass)} type="button" > {showPass ? <FaRegEye /> : <FaRegEyeSlash />} </button> */}{" "}
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="centered mt-4">
            <button type="submit">Sign In</button>
          </Col>
        </Row>
      </Form>
    </main>
  );
}
