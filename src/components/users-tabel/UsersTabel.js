import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTabel;
