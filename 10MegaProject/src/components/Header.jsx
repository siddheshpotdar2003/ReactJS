import React from "react";
import { Container, Logo } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoutBtn } from "../components";

const Header = () => {
  const authStatus = useSelector((state) => state.isAuthenticated);

  const navItems = [
    { name: "Home", url: "/", active: true },
    { name: "Login", url: "/login", active: !authStatus },
    { name: "Signup", url: "/signup", active: !authStatus },
    { name: "All Posts", url: "/all-posts", active: authStatus },
    { name: "Add Post", url: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-3 shadow bg-gray-100">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
