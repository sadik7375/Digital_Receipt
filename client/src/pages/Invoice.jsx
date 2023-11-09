import React, { useState, useRef,useEffect } from "react";
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { CgMail } from 'react-icons/cg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../print.css';

const Invoice = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [billFrom, setBillFrom] = useState("");
  const [billTo, setBillTo] = useState("");
  const [address, setaddress] = useState("");
  const [date, setDate] = useState("");
  const [description, setdescription] = useState("");
  const[price,setprice]=useState(0);
  const [quantity, setquantity] = useState(0);
  const [amount,setamount]=useState(0);
  const [total, settotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [notes, setnotes] = useState("");
  

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
      Item: ${description}
      Quantity: ${quantity}
      Total Amount: ${total}
    `;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const [rows, setRows] = useState([
    { description: "", price: 0, quantity: 0, amount: 0 }
  ]);

  const addRow = () => {
    setRows([...rows, { description: "", price: 0, quantity: 0, amount: 0 }]);
  };
  const updateRow = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
  
    if (field === 'price' || field === 'quantity') {
      const quantity = parseFloat(updatedRows[index]['quantity']) || 0;
      const price = parseFloat(updatedRows[index]['price']) || 0;
      updatedRows[index]['amount'] = quantity * price;
    }
  
    setRows(updatedRows);
  };
  
  useEffect(() => {
    const subtotal = rows.reduce((acc, row) => acc + row.amount, 0);
    const taxValue = parseFloat(tax) || 0;
    const taxpercent=taxValue/100;
    const shippingCostValue = parseFloat(shippingCost) || 0;
    const discountValue = parseFloat(discount) || 0;
    const totalAmount = subtotal+(subtotal*taxpercent  )+ shippingCostValue - discountValue;
    settotal(totalAmount);
  }, [rows, tax, shippingCost, discount]);
  
  
  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1); // Remove the row at the specified index
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
                    className="rounded-md border-2 border-gray-400 pl-2 p-2 ml-32 mt-2"
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
                    className="rounded-md border-2 border-gray-400 pl-2 p-3  ml-44 mt-2"
                    placeholder="Ship To"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
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
          
           
  <table className="w-full ">
    <thead className="bg-gray-600" >
      <tr>
        <th className=" p-2  ml-32 text-white">Item Description</th>
        <th className=" pl-2 text-white ">Quantity</th>
        <th className="pl-2 text-white" >Price</th>
        <th className="border border-gray-400  text-white ">Amount</th>
      </tr>
    </thead>
    <tbody>
    {rows.map((row, index) => (
  <tr key={index}>
    <td className="p-2">
      <input
        type="text"
        className="w-full border-2 mr-4 p-2 border-gray-400"
        name="description"
        value={row.description}
        onChange={(e) => updateRow(index, 'description', e.target.value)}
      />
    </td>
    <td className="p-2">
      <input
        type="text"
        className="w-32 ml-28 border-2 border-gray-400 p-2"
        name="quantity"
        value={row.quantity}
        onChange={(e) => updateRow(index, 'quantity', e.target.value)}
      />
    </td>
    <td className="p-2">
      <input
        type="text"
        className="w-32 ml-24 border-2 border-gray-400 p-2"
        name="price"
        value={row.price}
        onChange={(e) => updateRow(index, 'price', e.target.value)}
      />
    </td>
    <td className="ml-12">
      <p className="ml-6">{row.amount}</p>
    </td>
    <td>
      <button className="text-red-600 font-bold" onClick={() => deleteRow(index)}>X</button>
    </td>
  </tr>
))}


    </tbody>
  </table>

  <button
    onClick={addRow}
    className="mt-4  bg-[#00a884ff] hover:bg-blue-700 text-white font-sm py-1 px-6 rounded"
  >
    Add Item
  </button>
  <div className="mt-4 flex justify-end">
    <div className="w-1/4">
    <label htmlFor="tax">Tax</label>
<input
  type="text"
  className="w-full rounded-md border-2 border-gray-400 p-2"
  name="tax"
  value={tax}
  onChange={(e) => setTax(e.target.value)}
/>

<label htmlFor="shipping">Shipping Cost</label>
<input
  type="text"
  className="w-full rounded-md border-2 border-gray-400 p-2"
  name="shipping"
  value={shippingCost}
  onChange={(e) => setShippingCost(e.target.value)}
/>

<label htmlFor="discount">Discount</label>
<input
  type="text"
  className="w-full rounded-md border-2 border-gray-400 p-2"
  name="discount"
  value={discount}
  onChange={(e) => setDiscount(e.target.value)}
/>

    <tr>
  <td colSpan="3" className="p-2 ml-12 font-bold">Total:</td>
  <td className="ml-12 font-bold">{total}</td>
</tr>


  <textarea  className="rounded-md border-2 w-full border-gray-400 p-2  " value={notes} onChange={(e)=>setnotes(e.target.value)}    placeholder="term and condtions" />
  


    </div>
  </div>
  {/* Add a button for submitting the form here */}






</div>
        
          <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
          <div className="bg-white border rounded-lg shadow-lg px-6 py-8 w-90 mx-auto mt-8">
  <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
   {billFrom}
  </h1>
  <hr className="mb-2" />
  <div className="flex justify-between mb-6">
    <h1 className="text-lg font-bold">Invoice</h1>
    <div className="text-gray-700">
      <div>{date}</div>
      <div>Invoice #: INV12345</div>
    </div>
  </div>
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
    <div className="text-gray-700 mb-2">{billTo}</div>
    <div className="text-gray-700 mb-2">{address}</div>
   
  </div>
  <table className="w-full mb-8 border">
    <thead className="border">
      <tr>
        <th className="text-left font-bold text-gray-700">Description</th>
        <th className="text-right font-bold text-gray-700">Quatity</th>
        <th className="text-right font-bold text-gray-700">Price</th>
        <th className="text-right font-bold text-gray-700">Amount</th>
      
      </tr>
    </thead>
    <tbody className="border" >
    {rows.map((row, index) => (
  <tr key={index}>
    <td className="p-2">
      <input
        type="text"
        className="w-16  mr-4 p-1 "
        name="description"
        value={row.description}
        onChange={(e) => updateRow(index, 'description', e.target.value)}
      />
    </td>
    <td className="p-2">
      <input
        type="text"
        className="w-6 ml-28 b p-1"
        name="quantity"
        value={row.quantity}
        onChange={(e) => updateRow(index, 'quantity', e.target.value)}
      />
    </td>
    <td className="p-2">
      <input
        type="text"
        className="w-6  p-1"
        name="price"
        value={row.price}
        onChange={(e) => updateRow(index, 'price', e.target.value)}
      />
    </td>
    <td className="ml-12">
      <p className="ml-6">{row.amount}</p>
    </td>
    
  </tr>
))}
     
      
    </tbody>
    <tfoot className="mt-12" >
      <tr>
        <td className="text-left font- text-gray-700">Tax</td>
        <td className="text-right font-sm text-gray-700">{tax}</td>
      </tr>
      
      <tr>
        <td className="text-left font-sm text-gray-700">Shipping Cost</td>
        <td className="text-right font-sm text-gray-700">{shippingCost}</td>
      </tr>
      <tr>
        <td className="text-left font-sm text-gray-700">Discount</td>
        <td className="text-right font-sm text-gray-700">{discount}</td>
      </tr>
      <tr>
        <td className="text-left font-bold text-gray-700">Total</td>
        <td className="text-right font-bold text-gray-700">{total}</td>
      </tr>
    </tfoot>
  </table>
 
  <div className="text-gray-700 mb-2"> <textarea  className="rounded-md w-full   " value={notes} onChange={(e)=>setnotes(e.target.value)}     /></div>

</div>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
