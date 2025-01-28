import { useEffect, useState } from "react";
import authService from "./appwrite/auth.js";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice.js";
import { Header, Footer, RTE } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-1">
        {/* TODO: <Outlet /> */}
        {/* <RTE /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
