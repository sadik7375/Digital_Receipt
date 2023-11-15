import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="bg-gray-800 p-2">
        <h1 className="text-white text-2xl font-semibold mt-4 "><a href='#'>Digital Receipt</a></h1>
          <div className="container mx-auto flex justify-center items-center">
          
            <nav className="space-x-4 ml-1">
           
             
              <Link className="text-white text-lg  hover:bg-white hover:text-blue-500" to="/">Home</Link>
              <Link className="text-white text-lg  hover:bg-white hover:text-blue-500" to="/invoice">Invoice</Link>
              <Link className="text-white text-lg  hover:bg-white hover:text-blue-500" to="/rentreceipt">Rent </Link>
              <Link className="text-white text-lg  hover:bg-white hover:text-blue-500" to="/paymentreceipt">paymnet </Link>
              {/* <Link className="text-white text-lg  hover:bg-white hover:text-blue-500" to="/invoice">Subcription</Link> */}
              <Link className="text-white text-lg  hover:bg-white hover:text-blue-500" to="/tuitionfeereceipt">Tuition fee</Link>

           
            </nav>
          </div>
        </div>  
        </div>
    );
};

export default Navbar;