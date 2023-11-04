
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import Navbar from '../components/Navbar';
import Downloadbtn from '../components/Downloadbtn';
import SocialIcon from '../components/SocialIcon';
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




  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    
  }
    
  );
  


  const handleEmail = () => {

    toast.success('Download and attact receipt with email', { autoClose: 20000 });
    const emailSubject = 'Payment Receipt';
    // const emailBody = `
    //   Sender Name: ${senderName}
    //   Receiver Name: ${receiverName}
    //   Payment Amount: ${payAmount}
    //   Due Amount: ${duepayAmount}
    //   Payment Date: ${payDate}
    //   Next Due Date: ${nextdueDate}
    //   Address: ${address}
    //   Additional Notes: ${additionalNote}
    //   Additional Notes: ${photosign}
    // `;
    const emailBody = `
    I received payment from ${receiverName}.Thank you for your payment.Please check your payment receipt.
    
    Email by
    ${senderName}
   
  `;


    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

  
  };

 

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


  const handleFacebook = () => {
    // const pageURL = window.location.href; // The URL of your current web page
    toast.success('Attact Your receipt File', { autoClose: 3000 });
    const facebookShareURL = `https://www.facebook.com/`;
 

    window.open(facebookShareURL, '_blank');
  };


















  const calculateAmount = () => {
    const monthlyRentValue = parseFloat(monthlyRent);
    const advancePaymentValue = parseFloat(advancePayment);
    const utilityMoneyValue = parseFloat(utilityMoney);
  
    if (!isNaN(monthlyRentValue)  && !isNaN(utilityMoneyValue) && !isNaN(advancePaymentValue) ) {

        let total=monthlyRentValue + advancePaymentValue + utilityMoneyValue;
        settotalAmount(total);
    }
//    else if(!isNaN(monthlyRentValue)  && !isNaN(utilityMoneyValue) && !isNaN(advancePaymentValue)


//            const total=monthlyRentValue + advancePaymentValue + utilityMoneyValue;
//           settotalAmount(total);
//   };
}

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
               
                {/* <Print ref={componentRef}  ></Print> */}
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

                {/* <SocialIcon></SocialIcon> */}
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

        <button
          className="rounded-md  text-white p-1 text-sm"
          onClick={handleFacebook }
        >
        <FaFacebook className="text-blue-500 cursor-pointer" size={26} />
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
                  {/* <label htmlFor="to" className="block text-sm  text-gray-600">
                    To:
                  </label> */}
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
                  {/* <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Payment Amount:
                  </label> */}
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
                {/* <label htmlFor="address" className="block text-sm  text-gray-600">
                 
                </label> */}
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
                {/* <label htmlFor="notes" className="block text-sm  text-gray-600">
                  Notes:
                </label> */}
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
                  {/* <div className="border border-gray-400 h-8 rounded-md p-2">
                   
                  </div> */}
                </div>
              </div>
            

                                                {/* {Print portion}        */}
       
           
              <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
  


              <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          
          <div className="bg-white p-8">
          <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center mr-16">Payment Receipt</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="from"  className="block text-sm font-sm text-gray-600 gap-x-4   ">
                    Sender Name:
                  </label>
                  <p>{senderName}</p>
                  
                </div>
                
    
                <div className="flex-1">
                  <label htmlFor="to" className="block text-sm  text-gray-600">
                    Receiver Name:
                  </label>
                  <p>{receiverName}</p>
                
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Month Rent:
                  </label>
                    <p>{monthlyRent}</p>
                </div>
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Utility Money:
                  </label>
                  <p>{utilityMoney}</p>
                
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Advanced Money:
                  </label>
                  <p>{advancePayment}</p>
                
                </div>
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                   Total Rent:
                  </label>
                  <p>{totalAmount}</p>
                
                </div>
              </div>
            
           
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Payment Date
                  </label>
                    <p>{payDate}</p>
                </div>
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Next Pay Date
                  </label>
                  <p>{nextdueDate}</p>
                
                </div>
              </div>
    
            <div className="col-span-2">
                <label htmlFor="address" className="block text-sm  text-gray-600">
                 Address:
                </label>
              
                {address}
              </div>
              <div className="col-span-2">
                <label htmlFor="notes" className="block text-sm  text-gray-600">
                  Notes:
                </label>
                
                {additionalNote}
              </div>
           
           
              <div className="flex space-x-4 mt-4">
                <div className="flex-1">
               
               
                <div className="flex-1">
                  <label htmlFor="senderSignature" className="block text-sm ml-.5 text-gray-600 mb-8">
                    Sender Signature:
                  </label>
                  {photo && (
  <div className="flex-1">
    {/* <label htmlFor="senderSignature" className="block text-sm ml-12 text-gray-600 mb-8">
      Sender Signature:
    </label> */}

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
                {/* <div className="flex-1">
                  <label htmlFor="receiverSignature" className="block text-sm text-gray-600 ml-16 mb-8">
                    Receiver Signature:
                  </label>
                
                </div> */}
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
