import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsersTabel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const UsersTabel = () => {
  const [users, setUsers] = useState({ usersData: [] });

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers({ usersData: data });
      console.log(data);
    };
    fetchUsers();
  }, [setUsers]);

  return (
    <div>
      <Table size="sm" striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.usersData &&
            users.usersData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td className="centered-button">
                  <Button size="sm" variant="light">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTabel;
