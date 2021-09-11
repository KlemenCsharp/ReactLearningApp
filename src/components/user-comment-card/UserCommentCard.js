/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";

const UserCommentCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCommentCard;
