import React, { useEffect } from "react";
import { Form } from "../form/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../http/axiosInstance";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { postLogin, setStatus } from "../../../store/authSlice";
import STATUS from "../../../status/status";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const dispatch = useDispatch();
  const { status, token, error, successMessage } = useSelector(
    (store) => store.auth
  );
  console.log({ status });

  const onSubmit = (data) => {
    dispatch(postLogin(data, role));

    // try {
    //   const loginReq = await API.post(`/login/${role}`, data);
    //   const id = loginReq.data.id;

    //   if (loginReq.status === 200) {
    //     toast.success(loginReq.data.message);
    //     return navigate(`/home?role=${role}&id=${id}`);
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     toast.error(error.response.data.message);
    //   } else {
    //     toast.error(error);
    //   }
    // }
  };

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      dispatch(setStatus(null));
      localStorage.setItem("jsonWebToken", token);
      toast.success(successMessage);
      navigate(`/home?role=${role}`);
    } else if (status === STATUS.ERROR) {
      dispatch(setStatus(null));
      toast.error(error);
    }
  }, [status]);
  return (
    <>
      <Form onSubmit={onSubmit} auth={"login"} role={role} />
    </>
  );
};

export default Login;
