import React from "react";
import { Form } from "../form/Form";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const onSubmit = (data) => {};
  return (
    <>
      <Form onSubmit={onSubmit} auth={"login"} role={role} />
    </>
  );
};

export default Login;
