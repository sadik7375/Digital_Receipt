import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
    

      <footer className="bg-gray-800 text-white p-24 flex justify-between absolute bottom-0 w-full lg:mt-16 md:mt-12 sm:mt-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Awesome Company</p>
          <p>Email: info@awesomecompany.com</p>
        </div>

        <div className="flex space-x-8 mr-12">
          <div>
            
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
            
              <li>
                <Link to='/futuregoal'>Future Goal</Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
