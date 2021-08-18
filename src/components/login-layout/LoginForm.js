import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

function LoginForm() {

    const usernameChangeHandler = (event) => {
        setUserInput({
                ...userInput,  // Takes current state that we can write over, so password is not lost
                username: event.target.value
            });
    };
    
    const passwordChangeHandler = (event) => {
        setUserInput({
            ...userInput, 
            password: event.target.value
        });
    }

    const [userInput, setUserInput] = useState({
        username: '',
        password: ''
    })

    return (
        <Form>
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