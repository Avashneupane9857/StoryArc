import { blog1, blog2, blog3, person1 } from "../assets";

function Post() {
  const posts = [
    {
      id: 1,
      username: "Avash Neupane",
      work: "DevOps",
      Title: "How to Think About Your Career",
      overview:
        "It’s not that I didn’t think about my career at all. I was ambitious — I wanted to be a part of something big. ",
      img: { blog1 },
    },
    {
      id: 3,
      username: "Siddhu Ach",
      work: "Backend",
      Title: "How to Think About Your Career",
      overview:
        "It’s not that I didn’t think about my career at all.  I wanted to be a part of something big. ",
      img: { blog2 },
    },
    {
      id: 2,
      username: "Jafroz Ahamed",
      work: "Trader",
      Title: "How to Think About Your Career",
      overview:
        "It’s not that I didn’t think about my career at all.  I wanted to be a part of something big. ",
      img: { blog3 },
    },
  ];

  return (
    <section key={posts.id} className="">
      <div className="flex gap-20">
        <div>
          <div className="flex gap-2">
            <img
              className="w-8 h-8 rounded-full mt-[-4px]"
              src={person1}
              alt=""
            />
            <h1 className="font-light">{posts.id}</h1>
            <p className="font-light">in</p>
            <p className="font-medium">Devops</p>
          </div>
          <div className="pl-2 mt-3">
            <h1 className="text-[25px] font-semibold">
              Prompt Engineering Is Dead: DSPy <br /> Is New Paradigm
            </h1>
            <p className="font-light">Little overview whats wrriten inside</p>
          </div>
        </div>
        <div>
          <img src={blog1} className="w-35 mt-10 h-24" alt="" />
        </div>
      </div>
      <div className="bg-black opacity-10 w-[90%] mt-10 h-[1px]"></div>
    </section>
  );
}

export default Post;
