import React from "react";

const SearchInput = () => {
  return (
    <div className="container absolute z-50 w-full bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="flex gap-1 w-full p-1 bg-amber-500 rounded-md -mb-10 shadow-lg">
        <div className="flex-2 bg-white rounded-sm relative">
          <input
            type="text"
            placeholder="Where are you going?"
            className="px-4 py-4 w-full placeholder:text-gray-600 focus:outline-0 placeholder:font-[500] focus:placeholder:text-gray-300"
          />
          <ul className="hidden absolute mt-3 bg-white shadow-xl rounded-xl w-[calc(100%+8px)] -mx-1 h-50 z-[110] left-0 top-full">
            dropdown
          </ul>
        </div>
        <div className="bg-white flex-1 rounded-sm">
          <input
            type="text"
            className="px-4 py-4 w-full placeholder:text-gray-600 focus:outline-0 placeholder:font-[500] focus:placeholder:text-gray-300"
            placeholder="checkin checkout"
          />
        </div>
        <div className="bg-white flex-2 rounded-sm">
          <input
            type="text"
            placeholder="how many peoples"
            className="px-4 py-4 w-full placeholder:text-gray-600 focus:outline-0 placeholder:font-[500] focus:placeholder:text-gray-300"
          />
        </div>
        <div className="flex-1">
          <button className="bg-blue-500 rounded-sm text-2xl text-white h-full w-full hover:bg-blue-600 cursor-pointer shadow-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
