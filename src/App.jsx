import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courselist from "./pages/courselist.jsx";
import CourseDetail from "./pages/coursedetail.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { EmptyComponent } from "./pages/notfound.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courselist />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<EmptyComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;