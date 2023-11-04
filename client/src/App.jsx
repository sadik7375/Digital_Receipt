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


function App() {


  return (
    <>
   <ToastContainer />
   <BrowserRouter basename='/Digital_Receipt'   >
 <Routes>
        <Route path="/Digital_Receipt" element={<Home></Home>} />      
        <Route path="/paymentreceipt" element={<PaymentReceipt></PaymentReceipt>} />
        <Route path="/rentreceipt" element={<RentReceipt></RentReceipt>} />
        <Route path="/invoice" element={<Invoice></Invoice>} />
        <Route path="/tuitionfeereceipt" element={<TuitionfeeReceipt></TuitionfeeReceipt>} />
       
    
      </Routes>
      </BrowserRouter>
     

    </>
  )
}

export default App
