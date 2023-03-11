import React from "react";
import {UserContextConsumer} from "./userContext";

export default function Header() {
  return (
    <header>
      <UserContextConsumer>
        {({username}) => (
          <p>Welcome, {username}!</p>
        )}
      </UserContextConsumer>
    </header>
  )
}