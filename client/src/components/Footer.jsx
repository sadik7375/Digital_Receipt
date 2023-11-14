import React from 'react';

const Footer = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
    

      <footer className="bg-gray-800 text-white p-4 flex justify-between absolute bottom-0 w-full lg:mt-16 md:mt-12 sm:mt-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Awesome Company</p>
          <p>Email: info@awesomecompany.com</p>
        </div>

        <div className="flex space-x-8">
          <div>
            <h3 className="text-lg font-bold mb-2">How to Use</h3>
            <ul>
              <li>
                <a href="#">Getting Started</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Our Goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
