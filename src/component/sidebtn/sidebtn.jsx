import {useState} from "react"
import "./sidebtn.scss"
import {
    Overview,
    Tickets,
    Ideas,
    Contacts,
    Agents,
    Articles,
    Settings,
    Subscription,
  } from "../../assets/images.jsx";
  const Sidebtn = () => {
    const [bgColor, setBgColor] = useState("");
    return (
      <div>
        <button
          className={`btn-wrapper ${bgColor === "overview" ? "active" : " "}`}
          onClick={() => setBgColor("overview")}
        >
          <Overview /> <span className="btn-title"> Overview</span>
        </button>
        <button
          className={`btn-wrapper ${bgColor === "tickets" ? "active" : " "}`}
          onClick={() => setBgColor("tickets")}
        >
          <Tickets /> <span className="btn-title">Tickets</span>
        </button>
        <button
          className={`btn-wrapper ${bgColor === "ideas" ? "active" : " "}`}
          onClick={() => setBgColor("ideas")}
        >
          <Ideas /> <span className="btn-title">Ideas</span>
        </button>
        <button
          className={`btn-wrapper ${bgColor === "contacts" ? "active" : " "}`}
          onClick={() => setBgColor("contacts")}
        >
          <Contacts /> <span className="btn-title">Contacts</span>
        </button>
        <button
          className={`btn-wrapper ${bgColor === "agents" ? "active" : " "}`}
          onClick={() => setBgColor("agents")}
        >
          <Agents /> <span className="btn-title">Agents</span>
        </button>
        <button
          className={`btn-wrapper ${bgColor === "articles" ? "active" : " "}`}
          onClick={() => setBgColor("articles")}
        >
          <Articles /> <span className="btn-title">Articles</span>
        </button>
        <div className="line"></div>
        <button
          className={`btn-wrapper ${bgColor === "settings" ? "active" : " "}`}
          onClick={() => setBgColor("settings")}
        >
          <Settings /> <span className="btn-title">Settings</span>
        </button>
        <button
          className={`btn-wrapper ${bgColor === "subscription" ? "active" : " "}`}
          onClick={() => setBgColor("subscription")}
        >
          <Subscription /> <span  className="btn-title">Subscription</span>
        </button>
      </div>
    );
  };
export default Sidebtn