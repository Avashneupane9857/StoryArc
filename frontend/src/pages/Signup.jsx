import Landing from "./Landing";

function Signup() {
  return (
    <div className="relative">
      <div className="opacity-10 ">
        <Landing />
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-screen">
        <div className="w-[600px] h-[650px] bg-white  border-rounded rounded-xl shadow-lg absolute z-50">
          <a href="/">
            <div className="flex justify-end pr-5 pt-3 text-2xl text-slate-500 font-extralight">
              X
            </div>
          </a>
          <div className="flex flex-col items-center mt-16 ">
            <h1 className="text-3xl">Sign up with email</h1>
            <h1 className="font-extralight mt-8">
              Enter your email address to create an
            </h1>
            <h1 className="font-extralight">account</h1>
            <h1 className="mt-8 font-normal">Enter your name</h1>
            <input
              value={name}
              onChange={""}
              className="bg-[#F2F2F2] focus:outline-none focus:border-2 focus:bg-white focus:border-black rounded-md w-60 h-8 mt-3"
              type="text"
            />
            <h1 className="mt-8 font-normal">Enter your email</h1>
            <input
              className="bg-[#F2F2F2] focus:outline-none focus:border-2 focus:bg-white focus:border-black rounded-md w-60 h-8 mt-3"
              type="text"
            />
            <h1 className="mt-8 font-normal">Enter your password</h1>
            <input
              className="bg-[#F2F2F2] focus:outline-none focus:border-2 focus:bg-white focus:border-black rounded-md w-60 h-8 mt-3"
              type="text"
            />
            <a href="#">
              <button className="bg-black text-white rounded-2xl w-40 h-10 mt-8">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
