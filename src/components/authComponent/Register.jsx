import React from "react";
import { Form } from "../form/Form";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const onSubmit = (data, email) => {};

  return (
    <>
      <Form onSubmit={onSubmit} auth={"register"} role={role} />
    </>
  );
};

export default Register;
