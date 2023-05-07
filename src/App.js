import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tickets from "./page/ticket/tickets.jsx";
import Overview from "./page/overview/overview.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Tickets" element={<Tickets />} Component={Tickets} />
          <Route path="/Overview" element={<Overview />} Component={Overview} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
