import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelector from "./components/roleSelector/RoleSelector";
import Login from "./components/authComponent/Login";
import Register from "./components/authComponent/Register";
import { SendOtp } from "./components/authComponent/SendOtp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { Home } from "./components/pages/home/Home";
import AddItem from "./components/pages/addItem/AddItem";
import MyListing from "./components/pages/myListing/MyListing";
import SinglePage from "./components/pages/myListing/SinglePage";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition:Bounce
          />
          <Routes>
            <Route path="/" element={<RoleSelector />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sendOtp" element={<SendOtp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path="/listItem" element={<MyListing />} />
            <Route path="/singleitem" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
