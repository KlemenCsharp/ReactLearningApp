/* eslint-disable react/prop-types */
import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const UserForm = (props) => {
  console.log(props.incomingData.username);

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={props.incomingData.name}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="username">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={props.incomingData.username}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="email">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={props.incomingData.email}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="catchPhrase">
        <Form.Label column sm="2">
          Catch phrase
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue={props.incomingData.company?.catchPhrase}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default UserForm;
