import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import ColorPickerCss from "./ColorPicker.module.css";
function ColorPicker(props) {
  const [state, setState] = useState("#9cd1f5");
  const { changeBgColor } = useContext(Context);

  const selectVal = (e) => {
    setState(e.target.value);
    changeBgColor(e.target.value);
  };
  return (
    <div className={ColorPickerCss.customRadios}>
      <div>
        <input
          type="radio"
          id={`${ColorPickerCss.color1}`}
          name="color"
          onChange={selectVal}
          checked={state === "#ffb7ff"}
          value="#ffb7ff"
        />
        <label htmlFor={ColorPickerCss.color1}>
          <span>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
              alt="Checked Icon"
            />
          </span>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id={ColorPickerCss.color2}
          name="color"
          onChange={selectVal}
          checked={state === "#9cd1f5"}
          value="#9cd1f5"
        />
        <label htmlFor={ColorPickerCss.color2}>
          <span>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
              alt="Checked Icon"
            />
          </span>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id={ColorPickerCss.color3}
          name="color"
          onChange={selectVal}
          checked={state === "#fce899"}
          value="#fce899"
        />
        <label htmlFor={ColorPickerCss.color3}>
          <span>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
              alt="Checked Icon"
            />
          </span>
        </label>
      </div>
    </div>
  );
}

export default React.memo(ColorPicker);
