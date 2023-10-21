import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const [colors, setColors] = useState(new Values('#31bfc9').all(10))

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor)
    } catch (error) {
      toast.error(error.message)
    }

  }

  return <>

    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer position="top-center" />
  </>
};
export default App;
