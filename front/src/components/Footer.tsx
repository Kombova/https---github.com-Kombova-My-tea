import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-hunter-green mt-[10px] text-white px-4 py-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center mb-4 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-10 h-10 hover:scale-95">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
            <span className="font-bold text-xl">Company Name</span>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-1/3">
            <div className="mb-4 lg:mb-0 ">
              <FontAwesomeIcon icon={faPhone} className="mr-2"  />
              <a href="tel:+123456789">+1 (234) 567-89</a>
            </div>
            <div className=''>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:info@company.com">info@company.com</a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <span>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4">Follow us:</span>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;