import React, { createContext, useReducer, useState, useEffect } from "react";
import appReducer from "./AppReducer";
const Context = createContext();
const Axios = require("axios");

const initialState = {
  loading: false,
  photo: null,
  bgColor: "#9cd1f5",
};

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const uploadFile = (photo) => {
    dispatch({
      type: "SET_LOADING_TRUE",
    });
    console.log("here", photo);
    Axios.post("http://localhost:5000/post/image", photo, {
      headers: {
        Accept: "application/json",
        ContentType: "multipart/form-data",
      },
    }).then((res) => {
      console.log(res.data);
      dispatch({
        type: "PHOTO_RECIEVED_SUCCESSFULLY",
        payload: res.data,
      });
    });
  };
  const changeBgColor = (color) => {
    console.log("in context",color)
    dispatch({
      type: "CHANGE_BG_COLOR",
      payload: color,
    });
  };
  return (
    <Context.Provider
      value={{
        state,
        bgColor: state.bgColor,
        loading: state.loading,
        photo: state.photo,
        uploadFile,
        changeBgColor,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { GlobalContext, Context };
