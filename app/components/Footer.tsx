import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-blue text-white py-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between px-4 md:px-0">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          <h3 className="text-xl font-semibold">NEW FORCE CONSTRUCTION</h3>
          <p className="text-sm text-justify ml-4">
            Is your all-in-one solution for a wide range of construction and
            investment services. From affordable homes and general contracting to
            roofing and investment solutions, our in-house team ensures quality,
            reliability, and seamless project management every step of the way.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4 mt-8 md:mt-0">
          <h4 className="text-lg font-semibold">NAVIGATION</h4>
          <ul className="space-y-2 text-sm text-justify ml-4">
            <li>Home</li>
            <li>Invest with Us</li>
            <li>Sport Courts</li>
            <li>Affordable Houses</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4 mt-8 md:mt-0">
          <h4 className="text-lg font-semibold">OUR OFFICE</h4>
          <p className="text-sm text-justify ml-4">
            265 E Marion Avenue, Punta Gorda, FL 33950 (P)
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm mt-6">
        <p>Copyright © 2024 New Force Construction</p>
      </div>
    </footer>
  );
};

export default Footer;
