import Overcontent from "../../component/overcontent/overcontent";
import Overviewcard from "../../component/sidebtn/overviewcard/overviewcard";
import "./overviewblock.scss";

const Ovewbase = [
  {
    title: "Unresolved",
    num: 60,
  },
  {
    title: "Overdue",
    num: 16,
  },
  {
    title: "Open",
    num: 43,
  },
  {
    title: "On hold",
    num: 64,
  },
];

const Cardbase = [
  {
    title: "Resolved",
    number: 449,
  },
  {
    title: "Received",
    number: 426,
  },
  {
    title: "Average first response time",
    number: "33m",
  },
  {
    title: "Average response time",
    number: "3h 8m",
  },
];
const Overviewblock = () => {
  return (
    <div>
      <div className="overcontent">
        {Ovewbase.map((e) => {
          return (
            <Overviewcard key={Math.random} title={e.title} number={e.num} />
          );
        })}
      </div>
      <div className="over__aside">
        <div className="over__block">
          <div className="over__content">
            <h2>Today’s trends</h2>
            <p>as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="over__wrap">
            <div>
              <span className="over__hr"></span>
              <span className="over__text">Today</span>
            </div>
            <div>
              <span className="over__hr"></span>
              <span className="over__text">Yesterday</span>
            </div>
          </div>
        </div>
        <div className="over__div"></div>
        <div>
          {Cardbase.map((e) => {
            return (
              <Overcontent
                key={Math.random()}
                title={e.title}
                number={e.number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Overviewblock;
