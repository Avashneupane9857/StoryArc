import { useNavigate } from "react-router-dom";
import { blog1, blog2, blog3, person1, person2, person3 } from "../assets";

function Post() {
  const posts = [
    {
      id: 1,
      username: "Avash Neupane",
      profilePic: person1,
      work: "DevOps",
      Title: "How to Think About Your Career",
      overview: "It’s not that I didn’t think about my career at all. ",
      img: blog1,
    },
    {
      id: 2,
      username: "Siddhu Ach",
      profilePic: person2,
      work: "Backend",
      Title: "How to Think About Your Career",
      overview: "It’s not that I didn’t think about my career at all.   ",
      img: blog2,
    },
    {
      id: 3,
      username: "Jafroz Ahamed",
      profilePic: person3,
      work: "Trader",
      Title: "How to Think About Your Career",
      overview: "It’s not that I didn’t think about my career at all.  ",
      img: blog3,
    },
    {
      id: 4,
      username: "Dipendra Bhatta",
      profilePic: person1,
      work: "Fullstack & DevOps",
      Title: "How to Think About Your Career",
      overview: "It’s not that I didn’t think about my career at all  ",
      img: blog1,
    },
  ];
  const navigate = useNavigate();
  function goToPost(path) {
    navigate(path);
  }

  return (
    <section>
      {posts.map((items) => (
        <div
          key={items.id}
          className="mt-7 cursor-pointer"
          onClick={() => goToPost(`/home/detailedpost/${items.id}`)}
        >
          <div className="flex gap-20">
            <div>
              <div className="flex gap-2">
                <img
                  className="w-8 h-8 rounded-full mt-[-4px]"
                  src={items.profilePic}
                  alt=""
                />
                <h1 className="font-light">{items.username}</h1>
                <p className="font-light">in</p>
                <p className="font-medium">{items.work}</p>
              </div>
              <div className="pl-2 mt-3">
                <h1 className="text-[25px] font-semibold">
                  Prompt Engineering Is Dead: DSPy <br /> Is New Paradigm
                </h1>
                <p className="font-light">{items.overview}</p>
              </div>
            </div>
            <div>
              <img src={items.img} className="w-35 mt-10 h-24" alt="" />
            </div>
          </div>
          <div className="bg-black opacity-10 w-[90%] mt-10 h-[1px]"></div>
        </div>
      ))}
    </section>
  );
}

export default Post;
