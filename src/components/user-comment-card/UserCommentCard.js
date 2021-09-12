/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";
import "./UserCommentCard.css";

const UserCommentCard = (props) => {
  return (
    <Card className="post-container">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCommentCard;
