import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
  console.log("Head Rendered");
  useEffect(() => {
    console.log("use State hook called");
  }, [loginLogoutBtn]);
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              setLoginLogoutBtn(
                loginLogoutBtn === "Login" ? "LogOut" : "Login"
              );
            }}
          >
            {loginLogoutBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
