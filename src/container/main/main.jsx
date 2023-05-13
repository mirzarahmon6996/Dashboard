import { Route, Routes } from "react-router-dom";
import Table from "../base/base";
import "./main.scss";
import Maintitle from "./maintitle/maintitle";
import Overviewblock from "../overviewblock/overviewblock";
import Ideasbase from "../ideas/ideas";
const Main = ({setTitle,title}) => {
  return (
    <div className="main">
      <Maintitle setTitle={setTitle} title={title} />
      <Routes>
        <Route path="/tickets" element={<Table />} />
        <Route path="/overview" element={<Overviewblock />} />
        <Route path="/ideas" element={<Ideasbase />} />
      </Routes>
    </div>
  );
};

export default Main;
