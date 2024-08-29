import { createSlice } from "@reduxjs/toolkit";
import STATUS from "../status/status";
import API from "../src/http/axiosInstance";

const itemSlice = createSlice({
  name: "itemslice",
  initialState: {
    itemData: null,
    errorMessage: null,
    successMessage: null,
    status: null,
  },
  reducers: {
    setItemData(state, action) {
      state.itemData = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setItemData, setErrorMessage, setStatus, setSuccessMessage } =
  itemSlice.actions;
export default itemSlice.reducer;

export function handleItemPost(data) {
  return async function handleItemPostThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const response = await API.post("/item", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jsonWebToken")}`,
        },
      });
      if (response?.status === 200 && response?.data) {
        dispatch(setStatus(STATUS.SUCCESS));
        dispatch(setSuccessMessage(response?.data?.message));
      } else {
        dispatch(setErrorMessage(response?.data?.message));
        dispatch(setStatus(STATUS.ERROR));
      }
    } catch (error) {
      dispatch(setErrorMessage(error?.response?.data?.message));
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
export function renderItem() {
  return async function renderItemThunk(dispatch) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const response = await API.get("/item", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jsonWebToken")}`,
        },
      });
      console.log(response.status, response.data);
      if (response?.status === 200 && response?.data) {
        dispatch(setItemData(response?.data?.data));
        dispatch(setStatus(STATUS.SUCCESS));
        dispatch(setSuccessMessage(response?.data?.message));
        console.log(response.data.data + "tambeeee");
      } else {
        dispatch(setErrorMessage(response?.data?.message));
        dispatch(setStatus(STATUS.ERROR));
      }
    } catch (error) {
      dispatch(setErrorMessage(error?.response?.data?.message));
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

// export function renderItem() {
//   return async function renderItemThunk(dispatch) {
//     try {
//       dispatch(setStatus(STATUS.LOADING));
//       const response = await API.get("/item", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("jsonWebToken")}`,
//         },
//       });
//       console.log(typeof response.data);
//       console.log(JSON.parse(response.data));

//       // Check if response.data is actually an object as expected
//       if (
//         response?.status === 200 &&
//         typeof response?.data === "object" &&
//         response?.data?.data
//       ) {
//         dispatch(setItemData(response.data.data));
//         dispatch(setStatus(STATUS.SUCCESS));
//         dispatch(setSuccessMessage(response.data.message));
//         console.log(response.data.data + "tambeeee");
//       } else {
//         // Handle cases where response is not as expected
//         dispatch(
//           setErrorMessage(
//             response?.data?.message || "Unexpected response format"
//           )
//         );
//         dispatch(setStatus(STATUS.ERROR));
//       }
//     } catch (error) {
//       dispatch(
//         setErrorMessage(error?.response?.data?.message || "Network Error")
//       );
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
