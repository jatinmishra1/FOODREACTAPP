import React from "react";
import User from "../Utils/User";
import UserClass from "../Utils/UserClass";

function About() {
  return (
    <>
      this is about page
      <div>
        <User />
        <UserClass name={"anthoni"} contact={991822} />
      </div>
    </>
  );
}

export default About;
