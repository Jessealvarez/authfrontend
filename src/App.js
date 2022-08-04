import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <route
            path="/"
            element={
              <NavBar
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          ></route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
