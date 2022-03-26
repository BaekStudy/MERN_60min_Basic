import React from "react";
import styled from "styled-components";

function User({ user }) {
  return (
    <Container>
      <div className="wrapper">
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Username: {user.username}</h1>
      </div>
    </Container>
  );
}

/*
function User({ name , age , username }) {
  return (
    <Container>
      <div className="wrapper">
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Username: {username}</h1>
      </div>
    </Container>
  );
}
*/

const Container = styled("div")`
  .wrapper {
    width: 40vw;
    background-color: yellow;
    border: 1px solid black;
    margin: 10px auto;
    text-align: center;
  }
`;

export default User;
