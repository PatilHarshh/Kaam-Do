import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";
import DarkMode from "./DarkMode/DarkMode.jsx";

function MenuList({ user, onClick }) {
  const handleLogout = () => {};

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex">
        <Menu.Button className="flex gap-2 items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:text-white hover:bg-gray-100">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold">
              {user?.firstName ?? user?.name}
            </p>
            <span className="text-sm text-blue-600">
              {user?.jobTitle ?? user?.email}
            </span>
          </div>
          <img
            src={user?.profileUrl}
            alt="user profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <BiChevronDown
            className="h-8 w-8 text-slate-600"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`${
                    user?.accountType ? "user-profile" : "company-profile"
                  }`}
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  } group flex items-center rounded-md p-2 text-sm`}
                  onClick={onClick}
                >
                  <CgProfile
                    className={`${
                      active ? "text-white" : "text-gray-600"
                    } mr-2 h-5 w-5`}
                    aria-hidden="true"
                  />
                  {user?.accountType ? "User Profile" : "Company Profile"}
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  } group flex items-center rounded-md p-2 text-sm`}
                >
                  <AiOutlineLogout
                    className={`${
                      active ? "text-white" : "text-gray-600"
                    } mr-2 h-5 w-5`}
                    aria-hidden="true"
                  />
                  Log Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 w-full bg-[#f9f9f9] dark:bg-slate-800 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <Link to="/" className="text-orange-600 font-bold text-xl">
          Kaam<span className="text-[#fb923c]">Do</span>
        </Link>

        <ul className="hidden lg:flex gap-10 text-base text-gray-700 dark:text-white">
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/find-jobs">Find Jobs</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/companies">Companies</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/resume">Resume Builder</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/candidates">Candidates</Link>
          </li>
          <li className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
        <div className="hidden lg:block">
          {!user?.token ? (
            <Link to="/user-auth">
              <CustomButton
                title="Sign In"
                containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600"
              />
            </Link>
          ) : (
            <MenuList user={user} />
          )}
        </div>
        <DarkMode/>
        <button
          className="block lg:hidden text-slate-900"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose size={26} style={{color:'orange'}}/> : <HiMenuAlt3 size={26} style={{color:'red'}}/>}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <div className={`${isOpen ? "block bg-[#f9f9f9] dark:bg-slate-900" : "hidden"} w-full lg:hidden`}>
        <div className="container mx-auto flex flex-col pl-8 gap-3 py-5">
          <Link
            to="/"
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/find-jobs"
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            Find Jobs
          </Link>
          <Link
            to="/about"
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            About
          </Link>
          <Link
            to="/companies"
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            Companies
          </Link>
          <Link
            to="/candidates"
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            Candidates
          </Link>
          <Link
            to="/blogs"
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            Blogs
          </Link>
          <Link
            to={user?.accountType === "seeker" ? "apply-history" : "upload-job"}
            onClick={handleCloseNavbar}
            className="hover:bg-orange-600 hover:text-white px-3 py-2 rounded"
          >
            {user?.accountType === "seeker" ? "Applications" : "Upload Job"}
          </Link>
          <div className="py-10">
            {!user?.token ? (
              <Link to="/user-auth">
                <CustomButton
                  title="Sign In"
                  className="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600 dark:border-blue-200"
                />
              </Link>
            ) : (
              <MenuList user={user} onClick={handleCloseNavbar} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
