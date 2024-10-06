import { logo } from "../assets";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
function Navbar() {
  return (
    <div>
      <header className="w-[98%]   mx-auto flex justify-between  ">
        <div className="mt-5 flex justify-start">
          <img className="w-44 h-12" src={logo} alt="" />
          <div className="bg-[#F9F9F9]  rounded-2xl h-9 mt-2 w-56">
            <div className="flex mt-1 font-light">
              <CiSearch className="w-9 h-6 " />
              <h1>Search</h1>
            </div>
          </div>
        </div>

        <div className="flex gap-8  mt-8 ">
          <a href="/write">
            {" "}
            <h1 className="font-thin flex gap-2 mt-1 text-slate-500 ">
              <TfiWrite className=" h-9 w-6 mt-[-7px] " /> Write
            </h1>
          </a>
          <a href="/notification">
            <button className="text-3xl text-slate-500">
              <IoIosNotificationsOutline />
            </button>
          </a>

          <a href="/profile">
            <button className="bg-black text-center text-white rounded-full w-10 h-10 mt-[-7px]">
              A
            </button>
          </a>
        </div>
      </header>
      <div className="bg-black h-[1px] mt-1 opacity-10 w-full"></div>
    </div>
  );
}

export default Navbar;
