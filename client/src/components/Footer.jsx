import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="text-white mp-20">
      <div className="overflow-x-hidden -mb-0.5">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>

      <div className="bg-[#1d4ed8] ">
        <div className="container px-5 py-10 mx-auto ">
          <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
            {footerLinks.map(({ id, title, links }) => (
              <div className="w-auto px-4 " key={id + title}>
                <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                  {title}
                </h2>

                <div className=" flex flex-col gap-2 ">
                  {links.map(({ name, url }, index) => (
                    <Link
                      key={name + index}
                      to={url}
                      className="text-gray-300 text-sm hover:text-white "
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center mb-4">
            <p className="text-l mb-2">Subscribe to our Newsletter</p>
            <div className="flex items-center mb-4 text-gray-500">
              <TextInput
                type="email"
                placeholder="Email Address"
                containerStyles="bg-gray-100 mr-2 w-48 sm:w-64 "
              />
              <CustomButton
                title="Subscribe"
                containerStyles="bg-blue-900 text-white px-4 py-2 ml-4 mt-3 rounded hover:bg-blue-800 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4 pb-8">
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300">
            <FiInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="bg-[#001a36]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            &copy; 2023 Job Finder —
            <a
              className="text-[#1199e7] ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Kaam Do
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
