import { CiSearch } from "react-icons/ci";
import { logo } from "../assets";

import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Publish from "../components/Publish";

function WritePage() {
  const [clicked, setClicked] = useState(false);
  function handleSignOutDiv() {
    setClicked((prev) => !prev);
  }

  const [publish] = useState(true);
  function handlePublish() {
    setIsPublish((prev) => !prev);
  }
  
  const [isPublish, setIsPublish] = useState(false);
  const [title, setTitle] = useState("");

  const [story, setStory] = useState("");

  useEffect(() => {
    console.log("title", title);
    console.log("story", story);
  }, [title, story]);

  return (
    <>
      {isPublish ? (
        <Publish title={title} story={story} />
      ) : (
        publish && (
          <div className="w-[70%] mx-auto">
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

              <div className="flex gap-8  mt-8  ">
                <a href="/home/write/publish">
                  <button
                    onClick={handlePublish}
                    className="bg-[#1A8917] rounded-xl w-20 h-8 hover:bg-[#32902f] text-white"
                  >
                    Publish
                  </button>
                </a>
                <a href="/notification">
                  <button className="text-3xl text-slate-500">
                    <IoIosNotificationsOutline />
                  </button>
                </a>

                <button
                  onClick={handleSignOutDiv}
                  className="bg-black text-center text-white rounded-full w-10 h-10 mt-[-5px]"
                >
                  A
                </button>
              </div>
            </header>
            {clicked && (
              <div className="flex justify-end mt-2 pr-7 ">
                <div className="   w-20 text-center text-red-700 bg-[#ffffff]  drop-shadow-2xl rounded-xl ">
                  <a href="/">Sign Out</a>
                </div>
              </div>
            )}

            <div className="flex flex-col p-28">
              <textarea
                className="text-[60px] border-none  outline-none"
                maxLength="100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
              />
              <textarea
                className="text-[30px] pl-10 min-h-screen border-none outline-none"
                type="text"
                placeholder="Tell your story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                name=""
                id=""
              />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default WritePage;
