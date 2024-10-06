import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="w-[73%] mx-auto flex  mt-9">
        <div className="w-[70%]">
          <Post />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
