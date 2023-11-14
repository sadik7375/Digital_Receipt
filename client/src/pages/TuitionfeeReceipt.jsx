import Navbar from '../components/Navbar';
// import Downloadbtn from '../components/Downloadbtn';
// import SocialIcon from '../components/SocialIcon';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import React, { useState } from 'react';
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import '../print.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../print.css'
const TuitionfeeReceipt = () => {

  const [showReceipt, setShowReceipt] = useState(true);

  const [studentid,setstudentid]=useState("");
  const [studentname,setstudentname]=useState();
  const [payAmount,setpayAmount]=useState();
  const [extrapayAmount,setextrapayAmount]=useState();
  const [payDate,setpayDate]=useState();
  const[discount,setdiscount]=useState();
  const [paymethod,setpaymethod]=useState();
  const [address,setaddress]=useState();
  const [additionalNote,setadditionalNote]=useState();
  const [photosign,setphotosign]=useState(null);




  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    
  });

  const handleEmail = () => {
    toast.success('Download and attact receipt with email', { autoClose: 3000 });
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
    I received payment from ${studentname}.Thank you for your payment.Please check your payment receipt.
    
    Email by
    ${address}
   
  `;


    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

 

  const handleWhatsApp = () => {
    
    const text = `
      Sender Name: ${address}
      Receiver Name: ${studentname}
      : ${payAmount}
      Payment Date: ${payDate}
      Address: ${address}
      Additional Notes: ${additionalNote}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.location.href = whatsappURL;
  };


  const handleFacebook = () => {
    // const pageURL = window.location.href; // The URL of your current web page

    const facebookShareURL = `https://www.facebook.com/`;

    window.open(facebookShareURL, '_blank');
  };



  
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
                 <label  className="rounded-md text-gray-400 p-1 mr-1 text-md">Send Receipt   </label>
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
            
                
                
            <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center mr-16">Tuition Fee Receipt</h1>
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
                    placeholder="Student Id"
                    value={studentid} onChange={(e)=>setstudentid(e.target.value)}
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
                    placeholder="Student Name"
                    value={studentname} onChange={(e)=>setstudentname(e.target.value)}
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
                    placeholder="Tuition Fee"
                    value={payAmount} onChange={(e)=>setpayAmount(e.target.value)}
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
                    placeholder="Extra Fee"
                    value={extrapayAmount} onChange={(e)=>setextrapayAmount(e.target.value)}
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
                    placeholder="Discount"
                    value={discount} onChange={(e)=>setdiscount(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                
                  <select className="rounded-md border-2 border-gray-400 pl-2 mt-2" value={paymethod} onChange={(e)=>setpaymethod(e.target.value)}    >
                  <option value="" className='text-gray-600' >Payment method</option>
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
        <option value="Card">Card</option>
        <option value="Bank Transection">Bank Transection</option>
      </select>
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
                {/* <label htmlFor="address" className="block text-sm  text-gray-600">
                 
                </label> */}
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  className="mt-1 p-2 w-full rounded-md border-2 border-gray-400 pl-2 "
                  placeholder='Institute/sender Name & Address:'
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
               
                  <label htmlFor="senderSignature" className="block text-sm ml-8 text-gray-600 mb-8">
                    Sender Digital/Hand Signature:
                  </label>
                  {/* <div className="border border-gray-400 h-8 rounded-md p-2">
                    
                  </div> */}
                 <input
                     type="file"
                 id="senderSignature"
             name="senderSignature"
            onChange={(e) => setphotosign(e.target.files[0])}
            placeholder='signature'
  />
                </div>
                <div className="flex-1">
                  <label htmlFor="receiverSignature" className="block text-sm text-gray-600 ml-12 mb-8">
                    Receiver Signature:
                  </label>
                
                </div>
              </div>
            
       
           
              <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
  


              <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          
          <div className="bg-white ">
            <div className='bg-green-200 mb-8 '>
          <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center  mr-12">Payment Receipt</h1>
          <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center mr-16">{address}</h1>
          </div>
              <div className="  flex items-center space-x-4 mb-4">
              <div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className=" text-sm font-bold ml-8 text-gray-600">
      Student ID:
    </label>
    <p className="block text-sm  text-gray-600">{studentid}</p>
 </div>
</div>

    
<div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className=" font-bold  text-sm ml-8 text-gray-600">
    Student Name:
    </label>
    <p className="block text-sm font-bol  text-gray-600">{studentname}</p>
 </div>
</div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
              <div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className=" font-bold  text-sm ml-8 text-gray-600">
      Tution Fee:
    </label>
    <p className="block text-sm  text-gray-600">{payAmount}</p>
 </div>
</div>
<div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className=" font-bold  text-sm ml-8 text-gray-600">
     Extra Fee
    </label>
    <p className="block text-sm  text-gray-600">{extrapayAmount}</p>
 </div>
</div>
              </div>
            
           
              <div className="flex items-center space-x-4 mb-4">
              <div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className="font-bold  text-sm ml-8 text-gray-600">
      Pay Date
    </label>
    <p className="block text-sm  text-gray-600">{payDate}</p>
 </div>
</div>
<div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className=" font-bold  text-sm ml-8 text-gray-600">
       Waiver
    </label>
    <p className="block text-sm  text-gray-600">{discount}</p>
 </div>
</div>
              </div>


              <div className="flex items-center space-x-4 mb-4">
              <div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className="font-bold  text-sm ml-8 text-gray-600">
      Payment Method
    </label>
    <p className="block text-sm  text-gray-600">{paymethod}</p>
 </div>
</div>
                
              </div>
    
            {/* <div className="col-span-2">
                <label htmlFor="address" className="block text-sm  text-gray-600">
                 Institute/sender Name & Address:
                </label>
                {address}
              </div> */}
           <div className="flex-1">
 <div className="flex items-center">
    <label htmlFor="paymentAmount" className="font-bold text-sm ml-8 text-gray-600">
      Additional Notes:
    </label>
    <p className="block text-sm text-gray-600 border border-gray-800">{additionalNote}</p>
 </div>
</div>
           
            <div className="flex space-x-4 mt-4">
                <div className="flex-1">
                  <label htmlFor="senderSignature" className="font-bold block text-sm ml-8 text-gray-600 mb-8">
                    Sender Signature:
                  </label>
                  {photosign && (
  <div className="flex-1">
    {/* <label htmlFor="senderSignature" className="block text-sm ml-12 text-gray-600 mb-8">
      Sender Signature:
    </label> */}

<div htmlFor="senderSignature" className="block text-sm ml-6 text-gray-600 mb-4">
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
                  <label htmlFor="receiverSignature" className="font-bold block text-sm text-gray-600 ml-8 mb-8">
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

export default TuitionfeeReceipt;