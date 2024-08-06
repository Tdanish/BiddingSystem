import React from "react";
import { Form } from "../form/Form";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import API from "../../http/axiosInstance";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const onSubmit = async (data, email) => {
    try {
      const registerRequest = await API.post(`/register/${role}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (registerRequest.status === 200) {
        navigate(`/sendOtp?email=${email}&role=${role}`);
      } else {
        alert(registerRequest.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} auth={"register"} role={role} />
    </>
  );
};

export default Register;
