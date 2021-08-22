import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { loginSchema } from "../validations/LoginValidations";

function LoginForm() {
  const fakeUsername = "Klemen";
  const fakePassword = "55b789989F";

  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.username === fakeUsername) {
        if (values.password === fakePassword) {
          window.location.href = "http://www.w3schools.com";
        } else {
          alert("Password is invalid!");
        }
      } else {
        alert("Username does not exist!");
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {formik.errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.password}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
