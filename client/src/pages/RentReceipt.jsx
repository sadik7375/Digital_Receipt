
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import Navbar from '../components/Navbar';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import React, { useEffect, useState } from 'react';
import '../print.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// import '../print.css'
const RentReceipt = () => {

  const [showReceipt, setShowReceipt] = useState(false);

  const [senderName,setsenderName]=useState("");
  const [receiverName,setreceiverName]=useState();
  const [monthlyRent,setmonthlyRent]=useState();
  const [utilityMoney,setutilityMoney]=useState();
  const [advancePayment,setadvancePayment]=useState();
  const [totalAmount,settotalAmount]=useState();
  const [payDate,setpayDate]=useState();
  const [nextdueDate,setnextdueDate]=useState();
  const [address,setaddress]=useState();
  const [additionalNote,setadditionalNote]=useState();
  const [photo,setphoto]=useState(null);




 /* The above code is creating a React functional component. It defines a ref called `componentRef`
 using the `useRef` hook. It also defines a function called `handlePrint` which uses the
 `useReactToPrint` hook. The `useReactToPrint` hook takes an object as an argument with a `content`
 property. The `content` property is a function that returns the value of `componentRef.current`.
 This means that when the `handlePrint` function is called, it will print the content of the
 component referenced by `componentRef`. */
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    
  }
    
  );
  

/* The above code is a JavaScript React code snippet. It defines a function called `handleEmail` which
is responsible for sending an email with a payment receipt. */

  const handleEmail = () => {

    toast.success('Download and attact receipt with email', { autoClose: 20000 });
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
 * The `handleWhatsApp` function sends a WhatsApp message with a payment receipt to a specified
 * receiver.
 */
  const handleWhatsApp = () => {
    toast.success('Attact Your receipt File', { autoClose: 3000 });
    const text = `
I received payment from ${receiverName}.Thank you for your payment.Please check your payment receipt.
    
Send by
${senderName}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.location.href = whatsappURL;
  };




/**
 * The function calculates the total amount by adding the monthly rent, advance payment, and utility
 * money values.
 */
  const calculateAmount = () => {
    const monthlyRentValue = parseFloat(monthlyRent);
    const advancePaymentValue = parseFloat(advancePayment);
    const utilityMoneyValue = parseFloat(utilityMoney);
  
    if (!isNaN(monthlyRentValue)  && !isNaN(utilityMoneyValue) && !isNaN(advancePaymentValue) ) {

        let total=monthlyRentValue + advancePaymentValue + utilityMoneyValue;
        settotalAmount(total);
    }

}

/* The above code is using the useEffect hook in a React component. It is being used to calculate the
total amount by adding the values of monthlyRent, advancePayment, and utilityMoney. The
calculateAmount function is called whenever any of these values change. */
 useEffect(()=>{

    // settotalAmount(monthlyRent+advancePayment+advancePayment)
    calculateAmount();




 },[monthlyRent,advancePayment,utilityMoney]);




  
    return (
        <>
            <Navbar></Navbar>
         
          <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          <div className="bg-white shadow-lg p-8">
           
          <div className="flex justify-between items-center mb-4">
               
               
{/* The above code is using the ReactToPrint component from the React library to create a button that,
when clicked, triggers a print action and downloads a receipt. The button is styled using Tailwind
CSS classes. The handlePrint function is called when the button is clicked, and the setShowReceipt
function is called to show the receipt. The content prop is set to a function that returns the
componentRef.current value, which is a reference to the component that should be printed.  */}
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
            
                
                
            <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center mr-16">Rent Receipt</h1>
            <div className="mx-auto max-w-md">
            <form>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  {/* <label htmlFor="from"  className="block text-sm font-sm text-gray-600 gap-x-4   ">
                    From:
                  </label> */}
                  
                  <input
                    type="text"
                    id="from"
                    name="from"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2 peer "
                    placeholder="Owner's Name"
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
                    placeholder="Monthly Rent"
                    value={monthlyRent} onChange={(e)=>setmonthlyRent(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  {/* <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Due Amount:
                  </label> */}
                  <input
                    type="text"
                    id="dueAmount"
                    name="dueAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Utility money"
                    value={utilityMoney} onChange={(e)=>setutilityMoney(e.target.value)}
                  />
                </div>
                
              </div>


              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  {/* <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Payment Amount:
                  </label> */}
                  <input
                    type="text"
                    id="paymentAmount"
                    name="paymentAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Advanced Money"
                    value={advancePayment} onChange={(e)=>setadvancePayment(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                
                  <input
                    type="text"
                    id="dueAmount"
                    name="dueAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Total Amount"
                    value={totalAmount} onChange={(e)=>settotalAmount(e.target.value)}
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
                    placeholder=""
                    value={payDate} onChange={(e)=>setpayDate(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Next Due Date
                  </label>
                  <input
                    type="date"
                    id="dueAmount"
                    name="dueAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Due Amount"
                    value={nextdueDate} onChange={(e)=>setnextdueDate(e.target.value)}
                  />
                </div>
              </div>
    
     
    
    
    
    
                
    
              <div className="col-span-2">
               
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  className="mt-1 p-2 w-full rounded-md border-2 border-gray-400 pl-2 "
                  placeholder='Rental home/shop address'
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
                  <label htmlFor="senderSignature" className="block text-sm ml-12 text-gray-600 mb-8">
                    Sender Signature:
                  </label>
                  <input
                     type="file"
                 id="senderSignature"
             name="senderSignature"
            onChange={(e) => setphoto(e.target.files[0])}
            placeholder='signature'
  />
                </div>
                <div className="flex-1">
                  <label htmlFor="receiverSignature" className="block text-sm text-gray-600 ml-16 mb-8">
                    Receiver Signature:
                  </label>
                
                </div>
              </div>
            

                 {/* This code is Download Template*/}
           
              <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
  


              <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          
          <div className="bg-white ">
          <div className='bg-green-200 mb-8 '>
          <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center  mr-12">Payment Receipt</h1>
          
          </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="from"   className=" text-sm font-bold ml-8 text-gray-600">
                    Sender Name:
                  </label>
                  <p className="block text-md  text-gray-600" >{senderName}</p>
                  </div>
                </div>
                
    
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="to"  className=" text-sm font-bold ml-8 text-gray-600">
                    Receiver Name:
                  </label>
                  <p className="block text-md  text-gray-600">{receiverName}</p>
                </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="paymentAmount"  className=" text-sm font-bold ml-8 text-gray-600">
                    Month Rent:
                  </label>
                    <p className="block text-sm  text-gray-600">{monthlyRent}</p>
                    </div>
                </div>
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="dueAmount"  className=" text-sm font-bold ml-8 text-gray-600">
                    Utility Money:
                  </label>
                  <p className="block text-md  text-gray-600">{utilityMoney}</p>
                 </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="dueAmount" className=" text-sm font-bold ml-8 text-gray-600">
                    Advanced Money:
                  </label>
                  <p className="block text-md  text-gray-600">{advancePayment}</p>
                </div>
                </div>
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="dueAmount"  className=" text-sm font-bold ml-8 text-gray-600">
                   Total Rent:
                  </label>
                  <p className="block text-md  text-gray-600">{totalAmount}</p>
                </div>
                </div>
              </div>
            
           
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="paymentAmount"  className=" text-sm font-bold ml-8 text-gray-600">
                    Payment Date
                  </label>
                    <p className="block text-sm  text-gray-600">{payDate}</p>
                    </div>
                </div>
                <div className="flex-1">
                <div className="flex items-center">
                  <label htmlFor="dueAmount"  className=" text-sm font-bold ml-8 text-gray-600">
                    Next Pay Date
                  </label>
                  <p className="block text-md  text-gray-600">{nextdueDate}</p>
                </div>
                </div>
              </div>
    
            <div className="col-span-2 mb-4">
                <label htmlFor="address"  className=" text-sm font-bold ml-8 text-gray-600">
                 Address:
                </label>
              
                {address}
              </div>
              <div className="col-span-2">
              <div className="flex items-center">
                <label htmlFor="notes"  className=" text-sm font-bold ml-8 text-gray-600">
                  Notes:
                </label>
                
               <p className="block text-md text-gray-600">{additionalNote}</p> 
               </div>
              </div>
           
           
              <div className="flex space-x-4 mt-4">
                <div className="flex-1">
               
               
                <div className="flex-1">
                  <label htmlFor="senderSignature"  className=" text-sm font-bold ml-8 text-gray-600">
                    Sender Signature:
                  </label>
                  {photo && (
  <div className="flex-1">
    

<div htmlFor="senderSignature" className="block text-sm ml-6 text-gray-600 mb-4">
<img
      src={URL.createObjectURL(photo)}
      alt="Sender Signature"
      style={{ maxWidth: '50%', maxHeight: '50px' }}
    />
    </div>
    
  </div>
)}
                </div>
                  
               
                </div>
                <div className="flex-1">
                  <label htmlFor="receiverSignature" className="block  font-bold text-sm text-gray-600 ml-16 mb-8 ">
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

export default RentReceipt;
