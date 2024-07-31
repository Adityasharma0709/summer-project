import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact";
function Routecomponents() {
  return (
    <Routes>
      <Route extact={true} path="/" element={<HomePage />} />
      <Route extact={true} path="/Contact" element={<ContactPage/>} />
    </Routes>
  );
}
export default Routecomponents;
