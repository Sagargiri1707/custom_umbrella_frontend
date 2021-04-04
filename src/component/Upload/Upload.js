import React, { useContext, useState } from "react";
import UploadCss from "./Upload.module.css";
import uploadLogo from "../../assets/upload_icon.svg";
import { Context } from "../../context/context";
function Upload(props) {
  const [formdata, setFormdata] = useState();
  const {uploadFile,bgColor} =useContext(Context)
  
  const handleChange = (e) => {
    var value = e.target.files[0];
    setFormdata((prevState) => ({
      ...prevState,
      file: value,
    }));
  };
  const submitForm=(e)=>{
    e.preventDefault()
    console.log("heerre")
    const form = new FormData();
    for (var x in formdata) {
      form.set(x, formdata[x]);
    }
    uploadFile(form)
  }
  return (
    <>
    <form encType="multipart/form-data" onSubmit={submitForm}>

    <button type="button" className={UploadCss.button} style={{backgroundColor:bgColor}}>
      <input
        className={UploadCss.fileUpload}
        onChange={handleChange}
        type="file"
        id="file"
        name="photo"
        accept="image/*"
      />
      <label htmlFor="file" className="file-trigger">
        <img src={uploadLogo} className={UploadCss.image} alt="upload file" />{" "}
      </label>
    </button>
    <button type="submit" className={UploadCss.title}>Upload File</button>

    </form>

    </>
  );
}
export default Upload;
