function Sidebar() {
  return (
    <section className="flex">
      <div className="bg-black  mt-[-35px] opacity-10 min-h-screen w-[1px] "></div>
      <div className="pl-12">
        <div className="bg-[#C4E2FF] rounded-xl w-[300px] flex justify-between p-5 h-56">
          <div className="">
            <h1 className="font-bold">Writing in Medium</h1>
            <p className="mt-4 text-slate-600">New Writer</p>
            <p className="mt-2 text-slate-600">Expert writing advice</p>
            <p className="mt-2 text-slate-600">Grow your readership</p>
            <a href="/write">
              <button className="bg-black text-white rounded-2xl mt-2 w-40 h-10 ">
                Start writing
              </button>
            </a>
          </div>
          <div className="">X</div>
        </div>
        <div className="pl-5 mt-20">
          <h1 className="font-bold">Reading List</h1>
          <p className="text-slate-500 mt-2 text-sm">
            Click one the Write any story to easily
            <br /> add it to your reading list or a custom
            <br /> that you can share
          </p>
          <div className="text-slate-700 text-xs flex gap-4 mt-6 underline">
            <a href="/home">Home</a>
            <a href="/write">Write</a>
            <a href="/">Signout</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
