import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, {useState} from 'react';
import Feedback from "./Feedback.jsx"


const Footer = () => {
  
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div>
      <footer className="bg-[#EEE6DB] dark:bg-gray-800 flex flex-col md:flex-row justify-center items-center ">
        <div className="container p-10 flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Column 1 */}
            <div className="w-full md:w-1/5">
              <Link to="/" className="text-orange-600 font-bold text-xl">
                Kaam<span className="text-[#fb923c]">Do</span>
              </Link>
              <p className="mt-4 ">
                KaamDo is your ultimate platform for finding jobs and connecting with companies. We aim to simplify job searching and hiring processes.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FiInstagram />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Company</h2>
              <ul className="space-y-2">
                <li><Link to="/about" className=" hover:text-orange-600">About Us</Link></li>
                <li><Link to="/" className=" hover:text-orange-600">Home</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Support</h2>
              <ul className="space-y-2">
                <li><Link to="/company-profile" className=" hover:text-orange-600">Company Profile</Link></li>
                <li><Link to="/companies" className=" hover:text-orange-600">Companies</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Links</h2>
              <ul className="space-y-2">
                <li><Link to="/find-jobs" className=" hover:text-orange-600">Find Jobs</Link></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="w-full md:w-1/5 ">
              <h2 className="font-bold mb-3">Contact Us</h2>
              <ul className="space-y-2  ">
                <li className="hover:text-orange-600">Phone: (123) 456-7890</li>
                <li className="hover:text-orange-600">Email: info@example.com</li>
              </ul>
            
            </div>
            
            <div className="feedback-button">
              <button className="absolute bottom-5 right-10 bg-orange-400 text-white font-bold py-2 px-4 transform rotate-90 origin-bottom-right" onClick={openModal}>
                  Give Feedback
              </button>
            </div>
            <Feedback showModal={showModal} closeModal={closeModal} />
          </div>
        </div>
      </footer>
      <div className="bg-[#EEE6DB] dark:bg-gray-800 py-5 flex justify-center items-center">
        <p className=" text-sm text-center sm:text-left">
          Copyright&copy; 2024 by Kaam Do. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;