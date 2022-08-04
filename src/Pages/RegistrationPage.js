import React from "react";
import { useState } from "react";
import Auth from "../../../../fullstackbloggerfrontend/fullstackbloggerfrontendold/src/Auth.js";
const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <label> Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          const newUserName = e.target.value;
          setUsername(newUserName);
        }}
      ></input>
      <br />;<label> Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          const newPassword = e.target.value;
          setPassword(newPassword);
        }}
      ></input>
      ;
      <br />
      <button
        type="submit"
        onClick={async () => {
          loginUser(username, password);
          props.setIsAuthLoading(true);
          const loggedIn = await loginUser();
          if (loggedIn) {
            props.setIsAuthLoading(false);
            const navigate = useNavigate();
            navigate(`/`);
          }
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default RegistrationPage;
