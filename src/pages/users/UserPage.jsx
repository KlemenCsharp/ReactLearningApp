import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCommentCard from "../../components/user-comment-card/UserCommentCard";
import UserForm from "../../components/user-form/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

const UserPage = () => {
  let { id } = useParams();
  const [user, setUser] = useState({ userData: {} });
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]);

  const fetchUser = async () => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser({ userData: data });
  };

  const fetchPosts = async () => {
    const data = await axios(
      `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
    );
    setPosts(data.data);
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [setUser, setPosts]);

  return (
    <div>
      <h1>Id user is {id}</h1>
      <Container>
        <Row>
          <Col xs={5}>
            <UserForm incomingData={user.userData} />
          </Col>
          <Col>
            {posts &&
              posts.map((item) => (
                <UserCommentCard
                  key={item.id}
                  title={item.title}
                  body={item.body}
                />
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserPage;
