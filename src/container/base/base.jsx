import Mainblockimg from "../../assets/icons/mainblock__logo.svg";
import Mainblocklogo from "../../assets/icons/mainblock__filter.svg";
import Mainblock from "../../component/mainblock/mainblock";
import Tom from "../../assets/icons/tom.png";
import Chris from "../../assets/icons/chris.png";
import Henry from "../../assets/icons/henry.png";
import Chrs from "../../assets/icons/chrs.png";
import Matt from "../../assets/icons/matt.png";
import Robert from "../../assets/icons/robert.png";
import Sam from "../../assets/icons/sam.png";
const Base = [
  {
    logo: Tom,
    title: "Contact Email not Linked",
    name: "Tom Cruise",
    date: "May 26, 2019",
    time: "6:30 PM",
    priority: "High",
  },
  {
    logo: Chris,
    title: "Downtime since last week",
    name: "Chris Evans",
    date: "May 25, 2019",
    time: "2:00 PM",
    priority: "Normal",
  },
  {
    logo: Chrs,
    title: "Payment not going through",
    name: "Christian Bale",
    date: "May 25, 2019",
    time: "5:00 PM",
    priority: "Normal",
  },
  {
    logo: Henry,
    title: "Unable to add replies",
    name: "Henry Cavil",
    date: "May 25, 2019",
    time: "4:00 PM",
    priority: "High",
  },
  {
    logo: Matt,
    title: "Adding Images to Featured Posts",
    name: "Matt Damon",
    date: "May 26, 2019",
    time: "8:00 AM",
    priority: "low",
  },
  {
    logo: Robert,
    title: "When will I be charged this month?",
    name: "Robert Downey",
    date: "May 26, 2019",
    time: "7:30 PM",
    priority: "High",
  },
  {
    logo: Sam,
    title: "Referral Bonus",
    name: "Sam Smith",
    date: "May 25, 2019",
    time: "2:00 PM",
    priority: "Normal",
  },
  
];

const Table = () => {
  return (
    <div className="mainblock">
      <div className="mainblock__wrapper">
        <h1 className="mainblock__title ">All tickets</h1>
        <div>
          <img src={Mainblockimg} alt="" />
          <span className="mainblock__text">Sort</span>
          <img className="mainblock__logo" src={Mainblocklogo} alt="" />
          <span className="mainblock__text">Filter</span>
        </div>
      </div>
      <div className="mainblock__aside">
        <span className="mainblock-text">Ticket details</span>
        <span className="mainblock-text2">Customer name</span>
        <span className="mainblock-text3">Date</span>
        <span className="mainblock-text4">Priority</span>
      </div>
      {Base.map((e) => {
        return (
          <Mainblock
            key={Math.random()}
            logo={e.logo}
            title={e.title}
            name={e.name}
            date={e.date}
            time={e.time}
            priority={e.priority}
          />
        );
      })}
    </div>
  );
};

export default Table;
