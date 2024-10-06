import { useEffect, useRef, useState } from "react";
import { logo } from "../assets";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const divRef = useRef(null);
  function handleSignOutDiv() {
    setClicked((prev) => !prev);
  }

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 bg-white  w-full">
      <header className="w-[98%]    mx-auto flex justify-between  ">
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
          <a href="/home/write">
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

          <button
            onClick={handleSignOutDiv}
            className="bg-black text-center text-white rounded-full w-10 h-10 mt-[-7px]"
          >
            A
          </button>
        </div>
      </header>
      <div className="bg-black h-[1px] mt-1 opacity-10 w-full"></div>
      {clicked && (
        <div className="flex justify-end mt-2 pr-7 ">
          <div
            ref={divRef}
            className="   w-20 text-center text-red-700 bg-[#ffffff]  drop-shadow-2xl rounded-xl "
          >
            <a href="/">Sign Out</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
