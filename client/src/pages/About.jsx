import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Digital Receipts update day by day</h1>
          <p className="text-lg">Simplify your financial transactions with Digital Receipt – the ultimate solution for hassle-free receipt management. Whether you're leasing properties, handling tuition payments, processing general payments, or managing business invoices, our platform provides a seamless and efficient way to create, send, and organize digital receipts. Explore the convenience of our service, designed to save you time and present your transactions in a polished and secure manner. With Digital Receipt, experience a new level of ease and professionalism in your financial record-keeping.</p>
         <Link to="/"><button className="bg-white text-blue-500 px-6 py-2 mt-8 rounded-full hover:bg-blue-400 hover:text-white">
            Get Started
          </button></Link> 
        </section>
  
    
      
  
       
      </div>
    );
};

export default About;



