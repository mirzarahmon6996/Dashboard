import "./overcontent.scss";

const Overcontent = ({ title, number }) => {
  return (
      <div className="over__box">
        <p className="over__title">{title}</p>
        <p className="over__number">{number}</p>
      </div>
  );
};

export default Overcontent;
