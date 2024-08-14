import React from "react";
import { Form } from "../form/Form";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import API from "../../http/axiosInstance";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { postRegister, setStatus } from "../../../store/authSlice";
import STATUS from "../../../status/status";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const dispatch = useDispatch();
  let emailValue;
  const { status, error, successMessage } = useSelector((store) => {
    store.auth;
  });
  const onSubmit = async (data, email) => {
    emailValue = email;
    dispatch(postRegister(data, role));
  };

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      dispatch(setStatus(null));
      toast.success(successMessage);
      navigate(`/sendOtp?email=${emailValue}&role=${role}`);
    } else if (status === STATUS.ERROR) {
      dispatch(setStatus(null));
      toast.error(error);
    }
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} auth={"register"} role={role} />
    </>
  );
};

export default Register;
