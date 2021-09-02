import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  let { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ userData: {} });

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUser({ userData: data });
      console.log(data);
    };
    fetchUser();
  }, [setUser]);

  return (
    <div>
      <h1>Id user is {id}</h1>
      <p>username: {user.userData.username}</p>
    </div>
  );
};

export default UserPage;
