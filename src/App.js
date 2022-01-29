import "./shared/styles/common.scss";
import Path from "./navigation/Routes";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Path />
    </BrowserRouter>
  );
}

export default App;
