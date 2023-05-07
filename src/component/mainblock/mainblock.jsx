import "./mainblock.scss";
const Mainblock = ({ logo, title, name, date, time, priority }) => {
  return (
    <div className="mainblock">
      <div>
        <div className="mainblock__wrap">
          <img src={logo} alt="" />
          <div>
            <p className="mainwrap__title">{title}</p>
            <p className="mainwrap__text">Updated 1 day ago</p>
          </div>
          <div>
            <p className="mainwrap__title">{name}</p>
            <p className="mainwrap__text">on 24.05.2019</p>
          </div>
          <div>
            <p className="mainwrap__title">{date}</p>
            <p className="mainwrap__text">{time}</p>
          </div>
          <div>
            <button className="mainwrap__btn">{priority}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainblock;
