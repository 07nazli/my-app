import React from "react";

function User(props) {
  console.log(props);
  return (
    <div>
      USER
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <hr />
    </div>
  );
}

export default User;
