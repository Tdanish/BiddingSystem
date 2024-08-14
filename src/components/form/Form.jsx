import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import ThriftLogo from "./ThriftLogo.png";

export const Form = ({ role, auth, onSubmit }) => {
  const checkError = useRef();
  const [img, setImg] = useState([]);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [pwError, setPwError] = useState("");

  const [formDatas, setFormDatas] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    citizenship: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    setImg(files);
    setFormDatas({
      ...formDatas,
      [name]: name === "citizenship" ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth === "register" && role === "seller") {
      const files = checkError.current.files;
      if (files.length < 2) {
        setError("Submit front and back photo of citizenship");
        return;
      }
      setError("");
    }

    if (auth === "register") {
      if (formDatas.password !== formDatas.confirmPassword) {
        setPwError("password must match");
        return;
      }
      setPwError("");
    }

    if (auth === "register") {
      const phoneNumber = formDatas.phoneNumber.length;
      if (phoneNumber !== 10) {
        setPhoneError("please provide valid phone number");
        return;
      }
      setPhoneError("");
    }
    const formData = new FormData();
    if (auth === "register" && role === "seller") {
      for (let i = 0; i < img.length; i++) {
        formData.append("images", img[i]);
      }
    }
    formData.append("email", formDatas.email);
    formData.append("password", formDatas.password);

    if (auth === "register") {
      formData.append("userName", formDatas.userName);
      formData.append("phoneNumber", formDatas.phoneNumber);
      formData.append("confirmPassword", formDatas.confirmPassword);
    }

    if (auth === "register") {
      onSubmit(formData, formDatas.email);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div className="">
      <div>
        <div
          id="page-container"
          className="mx-auto  flex min-h-dvh w-full min-w-[320px] flex-col bg-white dark:bg-gray-900 dark:text-gray-100 "
        >
          {/* Page Content */}
          <main
            id="page-content"
            className=" flex justify-between  bg-green-300 "
          >
            {/* image content */}
            <div className="flex justify-center  w-[50%] items-center  min-h-dvh bg-[#bffcfb]  ">
              <div>
                <img src={ThriftLogo} alt="" />
              </div>
            </div>

            <div className="relative  flex min-h-dvh w-[50%] max-w-10xl items-center bg-white justify-center overflow-hidden p-4 lg:p-8">
              {/* Sign In Section */}
              <section className="w-full max-w-xl py-6">
                {/* Header */}
                <header className="mb-10 text-center">
                  <h1 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold">
                    <span className="text-[#008080]">Thrift Heaven</span>
                  </h1>
                  <h2 className="text-sm font-sm  text-gray-400">
                    Welcome, please sign in to your dashboard!!!
                  </h2>
                </header>
                {/* END Header */}

                {/* Sign In Form */}
                <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-2xl  dark:text-gray-100">
                  <div className="grow p-5 md:px-16 md:py-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {auth === "register" ? (
                        <div className="space-y-1">
                          <label
                            htmlFor="userName"
                            className="text-sm font-medium"
                          >
                            User Name
                          </label>
                          <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Enter your username"
                            required
                            onChange={handleChange}
                            className="block w-full rounded-lg border bg-white border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 "
                          />
                        </div>
                      ) : null}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                          onChange={handleChange}
                          className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          minLength="8"
                          required
                          onChange={handleChange}
                          className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500   dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 "
                        />
                      </div>
                      {auth === "register" ? (
                        <div className="space-y-1">
                          <label
                            htmlFor="ConfirmPassword"
                            className="text-sm font-medium"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="ConfirmPassword"
                            name="confirmPassword"
                            placeholder="Re-type your password"
                            required
                            onChange={handleChange}
                            className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500   dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 "
                          />
                          {pwError && (
                            <p className="text-red-600">{pwError} </p>
                          )}
                        </div>
                      ) : null}
                      <div>
                        {auth === "register" ? (
                          <div className="space-y-1 mb-6">
                            <label
                              htmlFor="phoneNumber"
                              className="text-sm font-medium "
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              placeholder="Enter your phonenumber"
                              required
                              onChange={handleChange}
                              className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500     dark:placeholder-gray-400 "
                            />
                            {phoneError && (
                              <p className="text-red-600"> {phoneError} </p>
                            )}
                          </div>
                        ) : null}
                        {auth === "login" ? (
                          <div className="mb-5 flex items-center justify-between gap-2">
                            <a
                              href="#"
                              className="inline-block text-sm font-medium  hover:text-[#008080] "
                            >
                              Forgot Password?
                            </a>
                          </div>
                        ) : null}

                        {auth === "register" && role === "seller" ? (
                          <div className="space-y-1">
                            <label
                              htmlFor="citizenship"
                              className="text-sm font-medium"
                            >
                              Citizenship Card photo (front and back)
                            </label>
                            <input
                              type="file"
                              id="citizenship"
                              name="citizenship"
                              multiple
                              required
                              onChange={handleChange}
                              ref={checkError}
                              accept="image/*"
                              className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500  focus:ring   dark:placeholder-gray-400 "
                            />
                            {error && <p className="text-red-600"> {error} </p>}
                          </div>
                        ) : null}
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#757070] bg-[#52b5b5] px-6 py-3 font-semibold leading-6 text-white hover:border-[[#779c63]] hover:bg-[#008080] hover:text-white "
                        >
                          <svg
                            className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>
                            {auth === "login" ? "login" : "register"}{" "}
                          </span>
                        </button>
                        {role === "bidder" ? (
                          <>
                            {/* Divider: With Label */}
                            <div className="my-5 flex items-center">
                              <span
                                aria-hidden="true"
                                className="h-0.5 grow rounded bg-gray-100 "
                              />
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium   dark:text-gray-200">
                                or sign in with
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-0.5 grow rounded bg-gray-100 "
                              />
                            </div>
                            {/* END Divider: With Label */}
                            <div className="grid grid-cols gap-2">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 hover:border-gray-300  hover:shadow-sm  active:border-gray-200 active:shadow-none   dark:text-gray-300  dark:hover:text-gray-200 "
                              >
                                <FcGoogle />
                                <span>Google</span>
                              </button>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </form>
                  </div>
                  <div className="grow bg-white p-4 text-center text-sm md:px-16  ">
                    Don’t have an account yet? <span> </span>
                    {auth === "register" ? (
                      <Link
                        to={`/login?role=${role}`}
                        className="font-medium text-[#ff8749] hover:text-[#008080] "
                      >
                        Sign in
                      </Link>
                    ) : (
                      <Link
                        to={`/register?role=${role}`}
                        className="font-medium text-[#bffcfb] hover:text-[#008080] "
                      >
                        Sign UP
                      </Link>
                    )}
                  </div>
                </div>
                {/* END Sign In Form */}

                {/* Footer */}
                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  Powered by
                  <a href="#" className="font-medium  hover:text-[#008080]">
                    Thrift Heaven
                  </a>
                </div>
                {/* END Footer */}
              </section>
              {/* END Sign In Section */}
            </div>
          </main>
          {/* END Page Content */}
        </div>
      </div>
      <div></div>
    </div>
  );
};
