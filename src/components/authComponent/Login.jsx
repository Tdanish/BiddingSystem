import React from "react";
import { Form } from "../form/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../http/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  console.log("checking");
  const onSubmit = async (data) => {
    try {
      console.log("starting");
      const loginReq = await API.post(`/login/${role}`, data);
      const id = loginReq.data.id;
      console.log(id);
      if (loginReq.status === 200) {
        console.log("hello");
        navigate(`/home?role=${role}&id=${id}`);
      } else {
        alert(loginReq.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Form onSubmit={onSubmit} auth={"login"} role={role} />
    </>
  );
};

export default Login;
