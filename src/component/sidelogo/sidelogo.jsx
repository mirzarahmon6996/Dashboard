import "./sidelogo.scss";
import logo from "../../assets/icons/logo.svg";
const Logo = () => {
  return (
    <div>
      <div className="logo__wrapper">
        <img src={logo} alt="" />
        <span className="logo__title">Dashboard Kit</span>
      </div>
    </div>
  );
};

export default Logo;

