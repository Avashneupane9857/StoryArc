import { useParams } from "react-router-dom";
import { blog1, blog2, blog3, person1, person2, person3 } from "../assets";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

function DetailedPost() {
  const detailedpost = [
    {
      id: 1,
      username: "Avash Neupane",
      profilePic: person1,
      work: "DevOps",
      Title: "How to Think About Your Career",
      overview: "It’s not that I didn’t think about my career at all. ",
      story:
        "When Covid hit and I had to work from home, I took over the cooking. My wife cooked all the weekday meals for the first 30 years of our marriage; now I have been cooking for the past 4. I had big shoes to fill, and initially, I was quite intimidated. Then I realized that I could cook like a graphic designer. I started treating each meal like a new design project with research. I find the right recipe. (I am completely hooked on the New York Times cooking app). Then I think about my audience. What does my wife like to eat? I collect the necessary ingredients and get to know the parameters of the project by reading all the instructions. As a graphic designer, I’m good at following instructions, using a grid to create layouts and adding just the right flair (herbs) to each project Then I realized that I could cook like a graphic designer. I started treating each meal like a new design project with research. I find the right recipe. (I am completely hooked on the New York Times cooking app). Then I think about my audience. What does my wife like to eat? I collect the necessary ingredients and get to know the parameters of the project by reading all the instructions. As a graphic designer, I’m good at following instructions, using a grid to create layouts and adding just the right flair (herbs) to each project.",

      img: blog1,
    },
    {
      id: 2,
      username: "Siddhant Ach",
      profilePic: person2,
      work: "DevOps",
      Title: "How to Think About Your Carrers",
      overview: "It’s not that I didn’t think about my career at all. ",
      story:
        "When Covid hit and I had to work from home, I took over the cooking. My wife cooked all the weekday meals for the first 30 years of our marriage; now I have been cooking for the past 4. I had big shoes to fill, and initially, I was quite intimidated. Then I realized that I could cook like a graphic designer. I started treating each meal like a new design project with research. I find the right recipe. (I am completely hooked on the New York Times cooking app). Then I think about my audience. What does my wife like to eat? I collect the necessary ingredients and get to know the parameters of the project by reading all the instructions. As a graphic designer, I’m good at following instructions, using a grid to create layouts and adding just the right flair (herbs) to each project Then I realized that I could cook like a graphic designer. I started treating each meal like a new design project with research. I find the right recipe. (I am completely hooked on the New York Times cooking app). Then I think about my audience. What does my wife like to eat? I collect the necessary ingredients and get to know the parameters of the project by reading all the instructions. As a graphic designer, I’m good at following instructions, using a grid to create layouts and adding just the right flair (herbs) to each project.",

      img: blog2,
    },
    {
      id: 3,
      username: "Jafforz Ahamed",
      profilePic: person3,
      work: "DevOps",
      Title: "How to Think About Your Career",
      overview: "It’s not that I didn’t think about my career at all. ",
      story:
        "When Covid hit and I had to work from home, I took over the cooking. My wife cooked all the weekday meals for the first 30 years of our marriage; now I have been cooking for the past 4. I had big shoes to fill, and initially, I was quite intimidated. Then I realized that I could cook like a graphic designer. I started treating each meal like a new design project with research. I find the right recipe. (I am completely hooked on the New York Times cooking app). Then I think about my audience. What does my wife like to eat? I collect the necessary ingredients and get to know the parameters of the project by reading all the instructions. As a graphic designer, I’m good at following instructions, using a grid to create layouts and adding just the right flair (herbs) to each project Then I realized that I could cook like a graphic designer. I started treating each meal like a new design project with research. I find the right recipe. (I am completely hooked on the New York Times cooking app). Then I think about my audience. What does my wife like to eat? I collect the necessary ingredients and get to know the parameters of the project by reading all the instructions. As a graphic designer, I’m good at following instructions, using a grid to create layouts and adding just the right flair (herbs) to each project.",

      img: blog3,
    },
  ];
  const { id } = useParams();
  console.log(id);
  const paramId = parseInt(id);

  console.log(paramId);

  const matchId = detailedpost.find((post) => post.id === paramId);
  if (!matchId) {
    return <p>Post not found</p>;
  }

  return (
    <section className="min-h-screen">
      <Navbar />

      <div key={matchId.id} className="w-[50%] mx-auto mt-32">
        <h1 className="text-black text-[40px] font-bold">{matchId.Title}</h1>
        <div className="flex gap-2 mt-6">
          <img
            className="w-14 h-14 rounded-full mt-[-4px]"
            src={matchId.profilePic}
            alt=""
          />
          <h1 className="font-light">{matchId.username}</h1>
          <p className="font-light">in</p>
          <p className="font-medium">{matchId.work}</p>
        </div>
        <div className=" pl-16 mt-[-19px]">
          <button className="text-red-700 text-base border-[1px] w-16 border-black rounded-xl">
            Follow
          </button>
        </div>
        <img className="mt-6" src={matchId.img} alt="" />
        <h1 className="text-[30px] mt-10 mb-10 text-center font-medium">
          {matchId.overview}
        </h1>
        <div className="text-[20px] text-slate-600">
          <p>{matchId.story}</p>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl text-center mt-10">
            Recommended from Story Arc
          </h1>
          <Post />
        </div>
      </div>

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
    </section>
  );
}

export default DetailedPost;
