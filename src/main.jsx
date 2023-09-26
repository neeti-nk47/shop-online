import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";
import MyState from "./context/data/myState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MyState>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </MyState>
  </Provider>
);
