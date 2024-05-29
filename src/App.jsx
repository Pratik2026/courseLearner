import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courselist from "./pages/courselist.jsx";

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Courselist />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
