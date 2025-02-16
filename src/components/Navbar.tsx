import { Link } from "react-router";

function Navbar() {
  return (
    <header className="bg-b-blue mb-14">
      <div className="flex items-center justify-between container">
        <Link to="/" className="text-2xl text-white font-semibold">
          Booking
        </Link>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer p-2 before:absolute before:w-full">
            IDR
          </button>
          <button className="cursor-pointer p-2 before:absolute before:w-full">
            Flag
          </button>
          <button className="cursor-pointer p-2">Help</button>
        </div>
      </div>
      <div className="flex flex-col relative container">
        <div className="flex gap-3">
          <button className="navbar-button active">Stays</button>
          <button className="navbar-button">Flights</button>
          <button className="navbar-button">Car rentals</button>
          <button className="navbar-button">Attraction</button>
          <button className="navbar-button">Airport Taxis</button>
        </div>
        <div className="pt-16 pb-[78px]">
          <h1 className="text-[48px] font-[700] text-white">
            Find your next stay
          </h1>
          <h4 className="text-[24px] font-[400] text-white">
            Search deals on hotels, homes, and much more...
          </h4>
        </div>
        <div className="flex gap-1 w-full p-1 bg-amber-500 rounded-md -mb-10">
          <div className="flex-2 bg-white rounded-sm">
            <input
              type="text"
              placeholder="Where are you going?"
              className="px-4 py-4 w-full placeholder:text-gray-600 focus:outline-0 placeholder:font-[500] focus:placeholder:text-gray-300"
            />
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
    </header>
  );
}

export default Navbar;
