import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="">


      <div className="bg-[#eee6db] pt-20 ">
        <div className="container px-5 py-10 mx-auto pb-20">
          <div className="flex flex-wrap justify-between gap-10">
            {/* Column 1 */}
            <div className="w-full md:w-1/5">
              <Link to="/" className="text-orange-600 font-bold text-xl">
                Kaam<span className="text-[#fb923c]">Do</span>
              </Link>              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <li><Link to="/about" >About Us</Link></li>
                <li><Link to="/services" >Services</Link></li>
                <li><Link to="/consultancy" >Consultancy</Link></li>
                <li><Link to="/testinomial" >Testimonial</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Support</h2>
              <ul className="space-y-2">
                <li><Link to="/help-center" >Help Center</Link></li>
                <li><Link to="/tweet-us" >Tweet Us</Link></li>
                <li><Link to="/feedback" >Feedback</Link></li>
                <li><Link to="/webans" >Webans</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="w-full " style={{width:'13%'}}>
              <h2 className="font-bold mb-3">Links</h2>
              <ul className="space-y-2">
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/become-teacher">Become Teacher</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/all-in-one">All in One</Link></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="w-full" style={{ width: '16%' }}>
              <h2 className="font-bold mb-3">Contact Us</h2>
              <ul className="space-y-2">
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#001a36] py-4">
          <div className="container mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              &copy; Copyright by Kaam Do .All right reserved.

            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <ul style={{display:'flex',color:'white'}}>
                <li style={{padding:'25px'}}>Privacy Policy</li>
                <li style={{padding:'25px'}}>Terms of Use</li>
                <li style={{padding:'25px'}}>Legal</li>
                <li style={{padding:'25px'}}>Site Map</li>              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
