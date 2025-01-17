import "./App.css";
import Login from "./Login";
import Profile from "./Profile";
import UserContextProvider from "./UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>UseContext</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
