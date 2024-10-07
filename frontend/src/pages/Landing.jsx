import { useNavigate } from "react-router-dom";
import { hero, logo } from "../assets";

function Landing() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
  }
  return (
    <main className="bg-[#F6F4ED]">
      <header className="w-[90%]   mx-auto flex justify-between  ">
        <div className="mt-5">
          <img className="w-52 h-14" src={logo} alt="" />
        </div>
        <div className="flex gap-10  mt-9 ">
          <a href="/Ourstory">
            {" "}
            <h1>Our story</h1>
          </a>
          <a href="#">
            {" "}
            <h1>Membership</h1>
          </a>
          <a href="/write">
            {" "}
            <h1>Write</h1>
          </a>
          <a href="/login">
            <button>Sign in</button>
          </a>

          <a href="/signup">
            <button className="bg-black text-white rounded-2xl w-28 h-10 mt-[-7px]">
              Get started
            </button>
          </a>
        </div>
      </header>
      <div className="bg-black h-[1px]"></div>
      <section className="flex items-center justify-center ">
        <div className="w-[80%] pl-36">
          <h1 className=" leading-none text-[90px] font-medium font-serif">
            Human
          </h1>
          <h1 className="  text-[90px] leading-none font-medium  font-serif">
            stories & ideas
          </h1>
          <p className="mt-11 text-2xl font-serif font-thin">
            A place to read, write, and deepen your understanding
          </p>
          <button
            onClick={handleClick}
            className="mt-11 bg-black text-white rounded-2xl w-44 h-12"
          >
            Start reading
          </button>
        </div>
        <div>
          <img className="h-[650px] pt-8 " src={hero} alt="" />
        </div>
      </section>
      <div className="bg-black h-[1px]"></div>
      <div className="flex justify-center text-sm gap-12 h-12 mt-5 font-extralight">
        <a href="">
          {" "}
          <p>Help</p>
        </a>
        <a href="">
          {" "}
          <p>Status</p>
        </a>
        <a href="">
          {" "}
          <p>Teams</p>
        </a>
        <a href="">
          {" "}
          <p>Blog</p>
        </a>
        <a href="">
          {" "}
          <p>About</p>
        </a>
        <a href="">
          {" "}
          <p>Carrers</p>
        </a>
        <a href="">
          {" "}
          <p>Press</p>
        </a>
      </div>
    </main>
  );
}

export default Landing;
