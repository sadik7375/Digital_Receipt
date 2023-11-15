
import Navbar from '../components/Navbar';

import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import React, { useState } from 'react';
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import '../print.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../print.css'
const PaymentReceipt = () => {

  const [showReceipt, setShowReceipt] = useState(false);

  const [senderName,setsenderName]=useState("");
  const [receiverName,setreceiverName]=useState();
  const [payAmount,setpayAmount]=useState();
  const [duepayAmount,setduepayAmount]=useState();
  const [payDate,setpayDate]=useState();
  const [nextdueDate,setnextdueDate]=useState();
  const [address,setaddress]=useState();
  const [additionalNote,setadditionalNote]=useState();
    const [photosign,setphotosign]=useState(null);




/* The above code is creating a reference to a React component using the `useRef` hook. It then defines
a function `handlePrint` that uses the `useReactToPrint` hook to handle printing. The `content`
property of `useReactToPrint` is set to a function that returns the current value of the
`componentRef`. This allows the `handlePrint` function to print the content of the referenced
component. */
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    
  });

/**
 * The `handleEmail` function sends an email with a payment receipt attached.
 */
  const handleEmail = () => {
    toast.success('Download and attact receipt with email', { autoClose: 3000 });
    const emailSubject = 'Payment Receipt';
    // const emailBody = `
  
    // `;
    const emailBody = `
    I received payment from ${receiverName}.Thank you for your payment.Please check your payment receipt.
    
    Email by
    ${senderName}
   
  `;


    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

 

  /**
   * The function `handleWhatsApp` generates a WhatsApp message with the provided information and opens
   * a new window to send the message.
   */
  const handleWhatsApp = () => {
    
    const text = `
      Sender Name: ${senderName}
      Receiver Name: ${receiverName}
      Payment Amount: ${payAmount}
      Due Amount: ${duepayAmount}
      Payment Date: ${payDate}
      Next Due Date: ${nextdueDate}
      Address: ${address}
      Additional Notes: ${additionalNote}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.location.href = whatsappURL;
  };






  
    return (
        <>
            <Navbar></Navbar>
         
          <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          <div className="bg-white shadow-lg p-8">
           
          <div className="flex justify-between items-center mb-4">
            
               
            
                <ReactToPrint
  trigger={() => (

    <button
      className="rounded-md bg-blue-800 text-white p-1 text-sm"
      onClick={() => {
        handlePrint();
        setShowReceipt(true);
      }}
    >
      Download Receipt
    </button>
  )}
  content={() => componentRef.current}
></ReactToPrint>

         
          
      
            <div className="flex items-center space-x-4">
                 <label  className="rounded-md text-gray-400 p-1 text-md">Send Receipt   </label>
                  <div className="flex items-center space-x-2">
                   
                 
                  <button
          className="rounded-md  text-white p-1 text-sm"
          onClick={handleEmail}
        >
            < CgMail className="text-blue-500 cursor-pointer " size={30} />
        </button>
                 
                 
        <button
          className="rounded-md  text-white p-1 text-sm"
          onClick={handleWhatsApp }
        >
         <FaWhatsapp className="text-[#00a884ff] cursor-pointer" size={28} />
        </button>

       
                 
                 
                   
                    
                   
                  </div>
                </div>
          </div>
            
                
                
            <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center mr-16">Payment Receipt</h1>
            <div className="mx-auto max-w-md">
            <form>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
               
                  <input
                    type="text"
                    id="from"
                    name="from"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2 peer "
                    placeholder="Sender's Name"
                    value={senderName} onChange={(e)=>setsenderName(e.target.value)}
                  />
                </div>
                
    
                <div className="flex-1">
                
                  <input
                    type="text"
                    id="to"
                    name="to"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Receiver's Name"
                    value={receiverName} onChange={(e)=>setreceiverName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                
                  <input
                    type="text"
                    id="paymentAmount"
                    name="paymentAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Payment Amount"
                    value={payAmount} onChange={(e)=>setpayAmount(e.target.value)}
                  />
                </div>
                <div className="flex-1">
              
                  <input
                    type="text"
                    id="dueAmount"
                    name="dueAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Due Amount"
                    value={duepayAmount} onChange={(e)=>setduepayAmount(e.target.value)}
                  />
                </div>
              </div>
            
           
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Payment Date
                  </label>
                  <input
                    type="date"
                    id="paymentAmount"
                    name="paymentAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Payment Amount"
                    value={payDate} onChange={(e)=>setpayDate(e.target.value)}
                  />
                </div>
             
              </div>
    
     
    
    
    
    
                
    
              <div className="col-span-2">
             
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  className="mt-1 p-2 w-full rounded-md border-2 border-gray-400 pl-2 "
                  placeholder=' Address'
                  value={address} onChange={(e)=>setaddress(e.target.value)}
                />
              </div>
              <div className="col-span-2">
            
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  className=" p-2 w-full rounded-md border-2 border-gray-400 pl-2 mt-2  "
                  placeholder="Additional Notes"
                  value={additionalNote} onChange={(e)=>setadditionalNote(e.target.value)}
                />
              </div>
             </form>
            </div>
            <div className="flex space-x-4 mt-4">
                <div className="flex-1">
               
                  <label htmlFor="senderSignature" className="block text-sm ml-8 text-gray-600 mb-8">
                    Sender Digital/Hand Signature:
                  </label>
                
                 <input
                     type="file"
                 id="senderSignature"
             name="senderSignature"
            onChange={(e) => setphotosign(e.target.files[0])}
            placeholder='signature'
  />
                </div>
             
              </div>
            
       
           
              <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
  


              <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          
          <div className="bg-white ">
          <div className='bg-green-200 mb-8 '>
          <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center  mr-12">Payment Receipt</h1>
          
          </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="from"  className="underline text-sm font-bold ml-4 text-gray-600">
                    Sender Name:
                  </label>
                  <p>{senderName}</p>
                  </div>
                </div>
                
    
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="to" className=" text-sm font-bold ml-4 text-gray-600">
                    Receiver Name:
                  </label>
                  <p>{receiverName}</p>
                </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="paymentAmount" className=" text-sm font-bold ml-4 text-gray-600">
                    Payment Amount:
                  </label>
                    <p>{payAmount}</p>
                    </div>
                </div>
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="dueAmount" className=" text-sm font-bold ml-4 text-gray-600">
                    Due Amount:
                  </label>
                  <p>{duepayAmount}</p>
                </div>
                </div>
              </div>
            
           
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="paymentAmount" className=" text-sm font-bold ml-4 text-gray-600">
                    Payment Date
                  </label>
                    <p>{payDate}</p>
                    </div>
                </div>
               
              </div>
    
            <div className="col-span-2 mb-3">
            <div className="flex items-center ">
                <label htmlFor="address" className=" text-sm font-bold ml-4 text-gray-600">
                 Address:
                </label>
                {address}
                </div>
              </div>
              <div className="col-span-2">
              <div className="flex items-center ">
                <label htmlFor="notes" className=" text-sm font-bold ml-4  text-gray-600">
                  Notes:
                </label>
                {additionalNote}
                </div>
              </div>
           
           
            <div className="flex space-x-4 mt-4">
                <div className="flex-1">
                  <label htmlFor="senderSignature" className="block text-sm ml-5 font-bold text-gray-600 mb-8">
                    Sender Signature:
                  </label>
                  {photosign && (
  <div className="flex-1">
 

<div htmlFor="senderSignature" className="block text-sm  ml-6 text-gray-600 mb-4">
<img
      src={URL.createObjectURL(photosign)}
      alt="Sender Signature"
      style={{ maxWidth: '50%', maxHeight: '50px' }}
    />
    </div>
    
  </div>
)}
                </div>
                <div className="flex-1">
                  <label htmlFor="receiverSignature" className="block font-bold text-sm text-gray-600 ml-16 mb-8">
                    Receiver Signature:
                  </label>
                 
                </div>
                </div>
              </div>

           
              </div>


</div>

          

              





               
           
              </div>
              </div>

        
        
    </>
    );
};

export default PaymentReceipt;