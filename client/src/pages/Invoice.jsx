import React, { useState, useRef } from "react";
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { CgMail } from 'react-icons/cg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../print.css';

const Invoice = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [billFrom, setBillFrom] = useState("");
  const [billTo, setBillTo] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleEmail = () => {
    toast.success('Download and attach receipt with email', { autoClose: 3000 });
    const emailSubject = 'Invoice';
    const emailBody = `
      Bill From: ${billFrom}
      Bill To: ${billTo}
      Date: ${date}
      Item: ${item}
      Quantity: ${quantity}
      Total Amount: ${totalAmount}
    `;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const [rows, setRows] = useState([
    { item: "", small1: "", small2: "", small3: "" }
  ]);

  const addRow = () => {
    setRows([...rows, { item: "", small1: "", small2: "", small3: "" }]);
  };

  const updateRow = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <>
     
      <div className="container mt-10   w-10/12 ml-12  "  >
        <div className="bg-white shadow-lg p-8 w-full">
          <div className="flex justify-between items-center mb-4">
            <ReactToPrint
              trigger={() => (
                <button
                  className="rounded-md bg-blue-800 text-white p-1 ml-36 text-sm"
                  onClick={() => {
                    handlePrint();
                    setShowReceipt(true);
                  }}
                >
                  Download Receipt
                </button>
              )}
              content={() => componentRef.current}
            />
            <div className="flex items-center space-x-4 mr-36 ">
              <label className="rounded-md text-gray-400 p-1 ml-32  text-md">Send Receipt </label>
              <div className="flex items-center space-x-2">
                <button
                  className="rounded-md text-white p-1 text-sm"
                  onClick={handleEmail}
                >
                  <CgMail className="text-blue-500 cursor-pointer" size={30} />
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-1xl font-semibold mb-4 text-gray-600 flex justify-center mr-16">Invoice</h1>
          <div className="max-w-screen-xl mx-auto p-4">
          
            <form   >
              <div className="flex items-center space-x-4 mb-4 ml-32  ">
                <div className="flex-1 ">
                  <input
                    type="text"
                    id="billFrom"
                    name="billFrom"
                    className="rounded-md border-2 border-gray-400 pl-2 p-2 mt-2 peer"
                    placeholder="Bill From"
                    value={billFrom}
                    onChange={(e) => setBillFrom(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    id="billTo"
                    name="billTo"
                    className="rounded-md border-2 border-gray-400 pl-2 p-2 ml-28 mt-2"
                    placeholder="Bill To"
                    value={billTo}
                    onChange={(e) => setBillTo(e.target.value)}
                  />
                  
                </div>
                
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="rounded-md border-2 border-gray-400 pl-2 ml-32 mt-2"
                    placeholder="Invoice Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    id="item"
                    name="item"
                    className="rounded-md border-2 border-gray-400 pl-2  ml-44 mt-2"
                    placeholder="Ship To"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                {/* <div className="flex-1">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div> */}
                {/* <div className="flex-1">
                  <input
                    type="number"
                    id="totalAmount"
                    name="totalAmount"
                    className="rounded-md border-2 border-gray-400 pl-2 mt-2"
                    placeholder="Total Amount"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div> */}
              </div>
            </form>
          
            <form className="ml-32"  >



<article className="md:grid grid-cols-4 gap-10">
<div  >
<label  className="mr-4 " htmlFor="description">Item description</label>
<textarea placeholder='' className=" rounded-md border-2 p-2 border-gray-400 pl-2 w-full " type="text" name="desc" id="des"  />
</div>
<div className="flex flex-col qp" >
<label htmlFor="quan">Quantity</label>
<input  type="text" className=" rounded-md border-2 border-gray-400 pl-2  " name="desc" id="des"   />
</div>
<div className="flex flex-col " >
<label htmlFor="price">Price</label>
<input type="text" className=" rounded-md border-2 border-gray-400 pl-2 mr-30  " name="desc" id="des"  />
</div>
<div className="flex flex-col mr-32 " > 
<label className=" mr-32 "  htmlFor="amount">Amount</label>
{/* <input type="text" name="desc" id="des" value={amount} onChange={(e)=>setamount(e.target.value) } /> */}
<p className=" mr-32 " >1200</p>
</div>
</article>
{/* <button type="submit" className=' bg-blue-400 text-white py-2 px-3 mb-3 rounded-shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-7'>

   {isEditing ? "Edit Item" : "Add Item"}

</button> */}
</form>
  <button
    onClick={addRow}
    className="mt-4 ml-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Add Row
  </button>

</div>
        
          <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
            <div className="container mx-auto mt-10 md:max-w-xl md:mx-auto lg:max-w-xl xl:mx-auto">
              <div className="bg-white p-8">
                <h1 className="text-1xl font-semibold mb-4 text-gray-600 flex justify-center mr-16">Invoice</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1">
                    <p htmlFor="from" className="block text-sm font-sm ml-8 text-gray-600 gap-x-4">
                      Bill From: {billFrom}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p htmlFor="to" className="block text-sm ml-8 text-gray-600">
                      Bill To: {billTo}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1">
                    <p htmlFor="paymentAmount" className="block text-sm ml-8 text-gray-600">
                      Date: {date}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p htmlFor="dueAmount" className="block text-sm ml-8 text-gray-600">
                      Item: {item}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1">
                    <p htmlFor="paymentAmount" className="block text-sm ml-8 text-gray-600">
                      Quantity: {quantity}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p htmlFor="dueAmount" className="block text-sm ml-8 text-gray-600">
                      Total Amount: {totalAmount}
                    </p>
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

export default Invoice;
