import React,{useState} from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { popularSearch } from "../utils/data";
import { HeroImage } from "../assets";
import cities from "./citylist";
import jobs from "./joblist";

const SearchInput = ({ placeholder, icon, value, onChange, suggestions }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
    setShowSuggestion(true);
  };

  const handleSuggestion = (suggestion) => {
    onChange(suggestion);
    setShowSuggestion(false);
  };

  const clearInput = () => {
    onChange("");
    setShowSuggestion(false);

   
  };

  

  

  return (
    <div className="relative flex items-center">
      {icon}

      <input
        value={value}
        onChange={handleChange}
        type="text"
        className="w-full p-2 outline-none bg-transparent text-base"
        placeholder={placeholder}
      />

      {value && (
        <AiOutlineCloseCircle
          className="text-gray-600 text-xl cursor-pointer"
          onClick={clearInput}
        />
      )}

      {showSuggestion && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg h-64  overflow-scroll no-scrollbar ">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = ({
  title,
  type,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}) => {
  
  const filterCity = (input) => {
    return cities.filter((city) =>
      city.toLowerCase().startsWith(input.toLowerCase())
    );
    }
    const filterJob = (input) => {
      return jobs.filter((jobs) =>
        jobs.toLowerCase().startsWith(input.toLowerCase())
      );
  };

  return (
    <div className="bg-[#f7fdfd]">
      <div className={`container mx-auto px-5 ${type ? "h-[500px]" : "h-[350px]"} flex items-center relative`}>
        <div className="w-full z-10">
          <div className="mb-8">
            <p className="text-slate-700 font-bold text-4xl">{title}</p>
          </div>

          <div className="w-full flex items-center justify-around bg-white px-2 md:px-5 py-2.5 md:py-6 shadow-2xl rounded-full">
            <SearchInput
              placeholder="Job Title or Keywords"
              icon={<AiOutlineSearch className="text-gray-600 text-xl" />}
              value={searchQuery}
              onChange={setSearchQuery}
              suggestions={filterJob(searchQuery)}
            />
            <SearchInput
              placeholder="Add Country or City"
              icon={<CiLocationOn className="text-gray-600 text-xl" />}
              value={location}
              onChange={setLocation}
              suggestions={filterCity(location)}
            />

            <div>
              <CustomButton
                onClick={handleClick}
                title="Search"
                containerStyles="text-white py-2 md:py3 px-3 md:px-10 focus:outline-none bg-blue-600 rounded-full md:rounded-md text-sm md:text-base"
              />
            </div>
          </div>

          {type && (
            <div className='w-full lg:1/2 flex flex-wrap gap-3 md:gap-6 py-10 md:py-14'>
              {popularSearch.map((search, index) => (
                <span
                  key={index}
                  className='bg-[#1d4fd826] text-[#1d4ed8] py-1 px-2 rounded-full text-sm md:text-base'
                >
                  {search}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className='w-1/3 h-full absolute top-24 md:-top-6 lg:-top-14 right-16 2xl:right-[18rem]'>
          <img src={HeroImage} className='object-contain' />
        </div>
      </div>
    </div>
  );
};

export default Header;
