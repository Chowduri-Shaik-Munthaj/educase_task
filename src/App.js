import { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login    from "./pages/Login";
import Account  from "./pages/Account";
import "./styles/global.css";

export default function App() {
  const [screen, setScreen] = useState("home");

  const navigate = (to) => setScreen(to);

  const renderScreen = () => {
    switch (screen) {
      case "home":  return <Home  onRegister={() => navigate("register")} onLogin={() => navigate("login")} />;
      case "register": return <Register onSubmit={() => navigate("account")} />;
      case "login":    return <Login    onLogin={() => navigate("account")} />;
      case "account":  return <Account />;
      default:         return null;
    }
  };

  return (
    <div className="phone-frame">
      {renderScreen()}
    </div>
  );
}