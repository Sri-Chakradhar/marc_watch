import React from "react";

const Contacts_info = () => {
  return (
    <>
      <div className="bg-slate-800 opacity-80 shadow-inner auto text-center p-8">
        <span className="">
          <div className="text-3xl">Contact US</div>
          <div className="py-7">
            <div className="text-xl py-3 text-clip">Want to Ask Something?</div>
            <input
              type="text"
              className="border-2 border-black focus:outline-none px-2 cursor-text hover:bg-slate-200 h-10 w-1/2 rounded-md rounded-r-none"
            ></input>
            <button className="bg-black transform hover:scale-110 duration-300 hover:bg-slate-950 text-white text-lg p-1 px-4 text-opacity-80 rounded-md rounded-l-none">
              Ok
            </button>
          </div>
          <div className="text-lg flex justify-around py-10 text-gray-600">
            <div>
              <div className="text-md">FAQs</div>
            </div>
            <div>
              <div>Details</div>
            </div>
          </div>
        </span>
      </div>
    </>
  );
};

export default Contacts_info;
