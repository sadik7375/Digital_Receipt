import PaymentReceipt from './pages/paymentReceipt'
import {  Routes, Route, useNavigate } from 'react-router-dom';
import './index.css'

import RentReceipt from './pages/rentReceipt';
import Invoice from './pages/invoice';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import TuitionFee from './pages/rentReceipt';
import TuitionfeeReceipt from './pages/TuitionfeeReceipt';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Futuregoal from './pages/Futuregoal';



function App() {


  return (
    <>
   <ToastContainer />
   <BrowserRouter   >
 <Routes>
        <Route extract path="/" element={<Home></Home>} />      
        <Route path="/paymentreceipt" element={<PaymentReceipt></PaymentReceipt>} />
        <Route path="/rentreceipt" element={<RentReceipt></RentReceipt>} />
        <Route path="/invoice" element={<Invoice></Invoice>} />
        <Route path="/tuitionfeereceipt" element={<TuitionfeeReceipt></TuitionfeeReceipt>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/futuregoal" element={<Futuregoal></Futuregoal>} />
   
       
    
      </Routes>
      </BrowserRouter>
     

    </>
  )
}

export default App
