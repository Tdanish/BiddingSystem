import React from "react";
import { Form } from "../form/Form";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <>
      <Form auth={"register"} role={role} />
    </>
  );
};

export default Register;
