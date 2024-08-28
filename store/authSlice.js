import { createSlice } from "@reduxjs/toolkit";
import API from "../src/http/axiosInstance";
import STATUS from "../status/status";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    status: null,
    role: null,
    token: null,
    error: null,
    email: null,
    successMessage: null,
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const {
  setUserData,
  setStatus,
  setRole,
  setToken,
  setSuccessMessage,
  setError,
  setEmail,
} = authSlice.actions;
export default authSlice.reducer;
export function postRegister(data, role) {
  return async function postRegisterThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const registerRequest = await API.post(`/register/${role}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (registerRequest.status === 200) {
        dispatch(setEmail(registerRequest?.data?.email));
        dispatch(setStatus(STATUS.SUCCESS));
        dispatch(setRole(role));
        dispatch(setSuccessMessage(registerRequest?.data?.message));
      } else {
        dispatch(setStatus(STATUS.ERROR));
        dispatch(setRole(role));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setStatus(STATUS.ERROR));
        dispatch(setError(error?.response?.data?.message));
      } else {
        dispatch(setError(error));
      }
    }
  };
}

export function postLogin(data, role) {
  return async function postLoginThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const loginReq = await API.post(`/login/${role}`, data);

      if (loginReq.status === 200 && loginReq?.data?.token) {
        dispatch(setStatus(STATUS.SUCCESS));
        dispatch(setToken(loginReq?.data?.token));
        dispatch(setRole(role));
        dispatch(setSuccessMessage(loginReq?.data?.message));
      } else {
        dispatch(setStatus(STATUS.ERROR));
        dispatch(setRole(role));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setStatus(STATUS.ERROR));
        dispatch(setError(error?.response?.data?.message));
      } else {
        dispatch(setError(error));
      }
    }
  };
}
