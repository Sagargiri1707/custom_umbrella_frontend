import TextCss from "./Text.module.css";
import React from "react";
function Text(props) {
  return (
    <div className={TextCss.text}>
      <h1>Customise your umbrella</h1>
      <h3>Upload a logo for an instant preview.</h3>
      <p>/png and .jpg files only.Max file size 5MB</p>
    </div>
  );
}

export default React.memo(Text);
