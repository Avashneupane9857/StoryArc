import { useNavigate } from "react-router-dom";
import { blog1 } from "../assets";

function Publish({ title, story }) {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }
  return (
    <div>
      <div className="flex justify-end pr-56 pt-10 text-slate-600">
        <h1
          className="text-2xl cursor-pointer"
          onClick={() => handleClick("/home/write")}
        >
          X
        </h1>
      </div>
      <section className="pl-44 pt-20 flex gap-[400px]">
        <div>
          <h1 className="text-2xl mb-9">Story Preview</h1>
          <div className="bg-[#F2F2F2] w-96 h-56">
            <img src={blog1} alt="" />
          </div>
          <h1 className="mt-14 ">{title}</h1>
          <div className="bg-black opacity-20 h-[1px] mt-10"></div>
          <p className="mt-10"> {story}</p>
        </div>
        <div>
          <button className="bg-[#1A8917] rounded-xl mt-40 w-28 h-8 hover:bg-[#32902f] text-white">
            Publish Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Publish;
