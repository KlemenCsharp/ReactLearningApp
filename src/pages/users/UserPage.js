import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
    let { id } = useParams();

  return (
    <div>
      <h1>Id user is {id}</h1>
    </div>
  );
}

export default UserPage;
