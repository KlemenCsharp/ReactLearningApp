import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };
    
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);    
    } 

    const submitHandler = (event) => {
        event.preventDefault(); // Without this page would by default reload - default javascript behaviour
        
        const loginData = {
            username: username,
            password: password
        }
        
        console.log(loginData);
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" onChange={usernameChangeHandler} ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={passwordChangeHandler}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    )
}

export default LoginForm;