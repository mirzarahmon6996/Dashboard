import "./ticket.scss";
import Sidebar from "../../container/sidebar/sidebar";
import Main from "../../container/main/main";
import { useState } from "react";
let Tickets = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="ticket">
      <Sidebar setTitle={setTitle} title={title}  />
      <Main setTitle={setTitle} title={title} />
    </div>
  );
};
export default Tickets;
