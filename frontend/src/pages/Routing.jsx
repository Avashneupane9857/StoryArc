import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Signup from "./Signup";
import Login from "./Login";
import Homepage from "./Homepage";
import DetailedPost from "./DetailedPost";
import WritePage from "./Writepage";
// import Publish from "../components/Publish";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/home/detailedpost/:id" element={<DetailedPost />} />
          <Route path="/home/write" element={<WritePage />} />
          {/* <Route path="/home/write/publish" element={<Publish />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
