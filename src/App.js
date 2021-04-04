 import { useContext } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker/ColorPicker';
import Demo from './component/Demo/Demo.js';
import Heading from './component/Heading/Heading';
import Text from './component/Text/Text';
import Upload from './component/Upload/Upload';
import { Context } from './context/context';

function App() {
  const {bgColor}=useContext(Context)
  return (
    <div className="container" style={{backgroundColor:bgColor}}>
      <div className="umbrella"><Demo/></div>
      <div className="text">  
      <Heading/>
      <ColorPicker/>
      <Text/>
      <Upload/>
      </div>
    </div>
  );
}

export default App;
