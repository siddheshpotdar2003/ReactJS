import { useEffect, useState } from "react";
import authService from "./appwrite/auth.js";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice.js";
import { Header, Footer, RTE } from "./components/index.js";

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
    <div>
      <div>
        <Header />
        <main>
          {/* TODO: <Outlet /> */}
          {/* <RTE /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
