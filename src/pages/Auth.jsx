import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/Register";

const Auth = (props) => {
  if (props.action == "login") {
    return (
      <>
        <LoginForm />
      </>
    );
  } else if (props.action == "register") {
    return (
      <>
        <RegisterForm />
      </>
    );
  }
  return <></>;
};

export default Auth;
