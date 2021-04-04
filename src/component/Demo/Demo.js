import React, { useContext, useEffect, useState } from "react";
import BlueImg from "../../assets/Blue.png";
import PinkImg from "../../assets/Pink.png";
import YellowImg from "../../assets/Yellow.png";
import Loader from "../../assets/loader_icon.svg";
import { Context } from "../../context/context";
import DemoCss from "./Demo.module.css";

function Demo(props) {
  const [image, setImage] = useState(BlueImg);
  const { photo, bgColor, loading } = useContext(Context);
  useEffect(() => {
    switch (bgColor) {
      case "#ffb7ff": {
        setImage(PinkImg);
        break;
      }
      case "#fce899": {
        setImage(YellowImg);
        break;
      }
      case "#9cd1f5": {
        setImage(BlueImg);
        break;
      }
    }
  }, [bgColor]);
  return (
    <>
      {loading ? (
        <img src={Loader} alt="loading"  className={DemoCss.loader} />
      ) : (
        <>
          {<img src={image} alt="Blue Img" className={DemoCss.image} />}
          {photo && (
            <img
              src={`data:image/png;base64,${arrayBufferToBase64(
                photo.data.data
              )}`}
              alt="asdfs"
              className={DemoCss.uploadedImage}
            />
          )}
        </>
      )}
    </>
  );
}

export default Demo;

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}
