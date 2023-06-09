import { useState } from "react";
import "./sidebtn.scss";
import { NavLink } from "react-router-dom";
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
const Sidebtn = ({setTitle,title}) => {
  const [bgColor, setBgColor] = useState("");
  return ( 
    <div>
      <NavLink onClick={()=>setTitle("Overview")} to="/overview">
        <button
          className={`btn-wrapper ${bgColor === "overview" ? "active" : " "}`}
          onClick={() => setBgColor("overview")}
        >
          <Overview /> <span className="btn-title"> Overview</span>
        </button>
      </NavLink>
      <NavLink onClick={()=>setTitle("Tickets")}  to="/tickets">
        <button
          className={`btn-wrapper ${bgColor === "tickets" ? "active" : " "}`}
          onClick={() => setBgColor("tickets")}
        >
          <Tickets /> <span className="btn-title">Tickets</span>
        </button>
      </NavLink>
      <NavLink onClick={()=>setTitle("Ideas")}   to="/ideas">
        <button
          className={`btn-wrapper ${bgColor === "ideas" ? "active" : " "}`}
          onClick={() => setBgColor("ideas")}
        >
          <Ideas /> <span className="btn-title">Ideas</span>
        </button>
      </NavLink>
      <NavLink onClick={()=>setTitle("Contacts")}  to="/contacts">
        <button
          className={`btn-wrapper ${bgColor === "contacts" ? "active" : " "}`}
          onClick={() => setBgColor("contacts")}
        >
          <Contacts /> <span className="btn-title">Contacts</span>
        </button>
      </NavLink>
      <NavLink  onClick={()=>setTitle("Agents")}  to="/agents">
        <button
          className={`btn-wrapper ${bgColor === "agents" ? "active" : " "}`}
          onClick={() => setBgColor("agents")}
        >
          <Agents /> <span className="btn-title">Agents</span>
        </button>
      </NavLink>
      <NavLink onClick={()=>setTitle("Articles")} to="articles">
        {" "}
        <button
          className={`btn-wrapper ${bgColor === "articles" ? "active" : " "}`}
          onClick={() => setBgColor("articles")}
        >
          <Articles /> <span className="btn-title">Articles</span>
        </button>
      </NavLink>
      <div className="line"></div>
      <NavLink onClick={()=>setTitle("Settings")} to="settings">
        {" "}
        <button
          className={`btn-wrapper ${bgColor === "settings" ? "active" : " "}`}
          onClick={() => setBgColor("settings")}
        >
          <Settings /> <span className="btn-title">Settings</span>
        </button>
      </NavLink>
      <NavLink onClick={()=>setTitle("Subscription")} to="subscription">
        <button
          className={`btn-wrapper ${
            bgColor === "subscription" ? "active" : " "
          }`}
          onClick={() => setBgColor("subscription")}
        >
          <Subscription /> <span className="btn-title">Subscription</span>
        </button>
      </NavLink>
    </div>
  );
};
export default Sidebtn;
