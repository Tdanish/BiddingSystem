import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../http/axiosInstance";
import { toast } from "react-toastify";

export const SendOtp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const role = searchParams.get("role");
  const [data, setData] = useState({
    OTP: "",
  });
  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendOtp = await API.post(`/sendotp/${email}/${role}`, data);
      if (sendOtp.status === 200) {
        toast.success(sendOtp.data.message);
        return navigate(`/login?role=${role}`);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error);
      }
    }
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center align-middle items-center bg-[#d4f8d9]  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 justify-center align-middle h-[50%] w-[30%] bg-[#c2f1a8] border border-gray-200 shadow-xl rounded-sm sm:flex-row sm:items-center sm:gap-2 dark:text-gray-100"
        >
          <div>
            <label htmlFor="sendOtp" className="sr-only">
              Send OTP
            </label>
            <input
              className="block w-full rounded-lg border border-gray-200 px-3 py-2 outline-none  dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 "
              type="text"
              id="sendOtp"
              name="OTP"
              onChange={handleChange}
              placeholder="Enter OTP"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#757070] bg-[#779c63] px-4 py-2 font-semibold leading-6 text-white  hover:bg-[#173e08] hover:text-white "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
