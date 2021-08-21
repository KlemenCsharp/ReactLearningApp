import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefualt();
            event.stopPropagation();
        }
        setValidated(true);
    }
  

    return (
        <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" required></Form.Control>
                <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required minLength="8"></Form.Control>
                <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    )
}

export default LoginForm;