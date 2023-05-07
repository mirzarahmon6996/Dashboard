import "./maintitle.scss";
import Maintitleimg from "../../../assets/icons/maincontent__img.svg";
import Notification from "../../../assets/icons/notification.svg";
import { Search } from "../../../assets/images";
import { Link } from "react-router-dom";
const Maintitle = () => {
  return (
    <div className="maintitle__wrapper">
      <h2>Tickets</h2>
      <div className="maintitle__content">
<Search />  
        <img className="maintitle__logo" src={Notification} alt="" />
        <div className="maintitle__hr"></div>
        <span className="maintitle__span">Jones Ferdinand</span>
        <img src={Maintitleimg} alt="" />
      </div>
    </div>
  );
};
export default Maintitle;
