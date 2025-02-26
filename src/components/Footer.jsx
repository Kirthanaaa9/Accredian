import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const programs = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
    "Project Management",
    "Strategy & Leadership",
    "Senior Management",
    "Fintech",
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Programs Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Programs</h2>
          <ul>
            {programs.map((program, index) => (
              <li key={index} className="mb-2">
                <button
                  className="flex items-center justify-between w-full md:w-auto"
                  onClick={() => toggleSection(index)}
                >
                  {program}
                  <span className="md:hidden">{openSection === index ? "−" : "+"}</span>
                </button>
                {openSection === index && (
                  <p className="text-sm text-gray-400 pl-4">More details...</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-400">
            Email: <a href="mailto:admissions@accredian.com" className="text-blue-400">admissions@accredian.com</a>
          </p>
          <p className="text-sm text-gray-400">Helpline: +91 909753XXXX</p>
          <p className="text-sm text-gray-400">Enrolled Students: +91 799524XXXX</p>
          <p className="text-sm text-gray-400 mt-2">Office: 4th Floor, 252, Udyog Vihar, Gurgaon</p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Accredian</h2>
          <ul className="text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2024 Accredian. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
