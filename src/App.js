import React, { useContext } from "react";
import "./App.css";
import { Context } from "./context/context";

const ColorPicker = React.lazy(() =>
  import("./component/ColorPicker/ColorPicker")
);
const Demo = React.lazy(() => import("./component/Demo/Demo.js"));
const Heading = React.lazy(() => import("./component/Heading/Heading"));
const Text = React.lazy(() => import("./component/Text/Text"));
const Upload = React.lazy(() => import("./component/Upload/Upload"));

function App() {
  const { bgColor } = useContext(Context);
  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="umbrella">
        <React.Suspense fallback={<div>Loading</div>}>
          <Demo />
        </React.Suspense>
      </div>
      <div className="text">
        <React.Suspense fallback={<div>Loading</div>}>
        <Heading />
       
        </React.Suspense>

        <React.Suspense fallback={<div>Loading</div>}>
          <ColorPicker />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading</div>}>
          <Text />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading</div>}>
          <Upload />
        </React.Suspense>
      </div>
    </div>
  );
}

export default React.memo(App);
