import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCommentCard from "../../components/user-comment-card/UserCommentCard";
import UserForm from "../../components/user-form/UserForm";

const UserPage = () => {
  let { id } = useParams();
  const [user, setUser] = useState({ userData: {} });
  // eslint-disable-next-line no-unused-vars
  const [comment, setComment] = useState({ commentData: {} });

  const fetchUser = async () => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser({ userData: data });
  };

  const fetchComments = async () => {
    const data = await axios(
      `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
    );
    setComment({ commentData: data });
    console.log(data.data);
  };

  useEffect(() => {
    fetchUser();
    fetchComments();
  }, [setUser, setComment]);

  return (
    <div>
      <h1>Id user is {id}</h1>
      <UserForm incomingData={user.userData} />
      {comment.commentData &&
        comment.commentData.map((item) => (
          <UserCommentCard key={item.id} title={item.title} body={item.body} />
        ))}
    </div>
  );
};

export default UserPage;
