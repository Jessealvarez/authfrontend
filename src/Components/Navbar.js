import React from "react";
import { Outlet, Link } from "react-router-dom";
import Auth from "../../../../fullstackbloggerfrontend/fullstackbloggerfrontendold/src/Auth.js";
import { useState, useEffect } from "react";

const Navbar = ({ isAuthLoading, setIsAuthLoading }) => {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const userToken = getUserToken();
    setUserToken(userToken);
  }, [isAuthLoading]);

  return (
    <div>
      <nav>
        <h3>NavBar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {!userToken && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
        {userToken && (
          <>
            <span>
              <strong>You Are Logged In</strong>
            </span>
            <button
              onClick={() => {
                logoutUser();
              }}
            >
              Logout
            </button>{" "}
          </>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
