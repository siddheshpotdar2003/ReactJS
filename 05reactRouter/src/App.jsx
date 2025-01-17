import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/index.js";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
