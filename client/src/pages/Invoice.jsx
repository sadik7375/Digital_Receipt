import React, { useState, useRef,useEffect } from "react";
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { CgMail } from 'react-icons/cg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../print.css';
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';
const Invoice = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [billFrom, setBillFrom] = useState("");
  const [billTo, setBillTo] = useState("");
  const [address, setaddress] = useState("");
  const [invoiceNumber,setinvoiceNumber]=useState();
  const [contact,setcontact]=useState();
  
  const [date, setDate] = useState("");
  const [description, setdescription] = useState("");
  const[price,setprice]=useState(0);
  const [quantity, setquantity] = useState(0);
  const [amount,setamount]=useState(0);
  const [total, settotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [advancepayment, setadvancepayment] = useState(0);
  const [notes, setnotes] = useState("");
   const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  


const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  const handleWhatsApp = () => {
    toast.success('Attact Your receipt File', { autoClose: 3000 });
    const text = `
I received payment from ${billFrom}.Thank you for your payment.Please check your payment receipt.
    
Send by
${billTo}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.location.href = whatsappURL;
  };


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

     I attacted your invoice.Please check it.If any query,please contact us.
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
    const advancepaymentValue = parseFloat(advancepayment) || 0;
    const totalAmount = (subtotal+(subtotal*taxpercent  )+ shippingCostValue) - advancepaymentValue;
    settotal(totalAmount);
  }, [rows, tax, shippingCost, advancepayment]);
  
  
  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1); // Remove the row at the specified index
    setRows(updatedRows);
  };
  

  const exportToCSV = () => {
    // Prompt the user for the desired file name
    const fileName = prompt("Enter file name (.csv don't need):");
    
    // Check if the user entered a file name
    if (!fileName) {
      return; // Cancel the export if no file name is provided
    }
  
    const csvContent = 'data:text/csv;charset=utf-8,';
  
    // Add header row for input fields
    const inputFieldHeader = Object.keys({ billFrom, billTo, address, invoiceNumber, date, contact }).join(',') + '\n';
  
    // Add data row for input fields with double-quotes
    const inputFieldData = Object.values({ billFrom, billTo, address, invoiceNumber, date, contact })
      .map(value => `"${value}"`).join(',') + '\n';
  
    // Add header row for table
    const tableHeader = Object.keys(rows[0]).join(',') + '\n';
  
    // Add data rows for table
    const tableDataRows = rows.map(row => Object.values(row).map(value => `"${value}"`).join(',') + '\n');
  
    const csvData = csvContent + inputFieldHeader + inputFieldData + tableHeader + tableDataRows.join('');
    const encodedURI = encodeURI(csvData);
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = encodedURI;
  
    // Use the provided file name or a default name if not provided
    link.download = fileName ? `${fileName}.csv` : 'invoice.csv';
  
    document.body.appendChild(link);
  
    // Trigger a click on the link to start the download
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
  };

















  return (
    <>
     
      <div className="container mt-10   w-10/12 ml-24 "  >
        <div className="bg-white shadow-lg p-8 w-full">
          <div className="flex justify-center items-center mb-4 mr-32">
        
            <ReactToPrint
              trigger={() => (
                <button
                  className="rounded-md bg-[#00a884ff] text-white p-3 ml-36 text-sm"
                  onClick={() => {
                    handlePrint();
                    setShowReceipt(true);
                  }}
                >
                  Download Invoice
                </button>
              )}
              content={() => componentRef.current}
            />
              
            
            <div className="flex items-center space-x-4 mr-28 ">
              <label className="rounded-md text-gray-400 p-1 ml-32 font-semibold text-md">Send Invoice </label>
              <div className="flex items-center space-x-2">
                <button
                  className="rounded-md text-white p-1 text-sm"
                  onClick={handleEmail}
                >
                  <CgMail className="text-blue-500 cursor-pointer" size={30} />
                </button>
                <button
          className="rounded-md  text-white p-1 text-sm"
          onClick={handleWhatsApp }
        >
         <FaWhatsapp className="text-[#00a884ff] cursor-pointer" size={28} />
        </button>
        <button
        className="rounded-md bg-blue-800 text-white p-3 ml-36 text-sm"
        onClick={exportToCSV}
      >ExportData to csv</button>
       
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-4 text-gray-600 flex justify-center mt-6 mr-32">Invoice</h1>
          <div className="max-w-screen-xl mx-auto p-4">
          
          <form>
  <div className="flex items-center space-x-4 mb-4 ml-48">
    <div className="flex-1">
      <label htmlFor="billFrom" className="block text-gray-600">
       
      </label>
      <input
        type="text"
        id="billFrom"
        name="billFrom"
        className="rounded-md border-2 border-gray-400 pl-2 p-4 mt-2 peer"
        placeholder="Bill From"
        value={billFrom}
        onChange={(e) => setBillFrom(e.target.value)}
      />
    </div>
    <div className="flex-1">
     
      <input
        type="text"
        id="contactNumber"
        name="contactNumber"
        className="rounded-md border-2 border-gray-400 pl-2 p-2 ml-4 mt-2"
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setcontact(e.target.value)}
      
      />
    </div>
  </div>

  <div className="flex items-center space-x-4 mb-4">
    <div className="flex-1">
    
      <input
        type="text"
        id="billTo"
        name="billTo"
        className="rounded-md border-2 border-gray-400 pl-2 p-4 ml-48 mt-2"
        placeholder="Bill To"
        value={billTo}
        onChange={(e) => setBillTo(e.target.value)}
      />
    </div>
    <div className="flex-1">
    
      <input
        type="text"
        id="shipTo"
        name="shipTo"
        className="rounded-md border-2 border-gray-400 pl-2 p-2 ml-28 mt-1"
        placeholder="Ship To"
        value={address}
        onChange={(e) => setaddress(e.target.value)}
      />
    </div>
  </div>

  <div className="flex items-center space-x-4 mb-4">
    <div className="flex-1">
      
      <input
        type="text"
        id="invoiceNumber"
        name="invoiceNumber"
        className="rounded-md border-2 border-gray-400 pl-2 p-2 ml-48 mt-1"
        placeholder="Invoice Number"
        value={invoiceNumber}
        onChange={(e) => setinvoiceNumber(e.target.value)}
       
      />
    </div>
    <div className="flex-1">
      <label htmlFor="invoiceDate" className="block ml-28 text-gray-600">
        Invoice Date:
      </label>
      <input
        type="date"
        id="invoiceDate"
        name="invoiceDate"
        className="rounded-md border-2 border-gray-400 pl-2 p-2 ml-28  mt-2"
        placeholder="Invoice Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
    
      />
    </div>
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
    <div className="mt-4 text-center">
      <button
        className="bg-blue-500 text-white  py-2 px-4 mr-64 mb-4 rounded"
        onClick={() => setShowAdditionalFields(!showAdditionalFields)}
      >
        {showAdditionalFields ? 'X' : '+Tax/Shipping/Payment'} 
      </button>
    </div>

    {showAdditionalFields && (
      <>
        <div>
          <label htmlFor="tax">Tax</label>
          <input
            type="text"
            className="w-full rounded-md border-2 border-gray-400 mb-1 p-2"
            name="tax"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="shipping">Shipping Cost</label>
          <input
            type="text"
            className="w-full rounded-md border-2 border-gray-400 mb-1 p-2"
            name="shipping"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="advancepayment">Payment</label>
          <input
            type="text"
            className="w-full rounded-md border-2 border-gray-400 p-2"
            name="advancepayment"
            value={advancepayment}
            onChange={(e) => setadvancepayment(e.target.value)}
          />
        </div>
      </>
    )}

    <div className="mr-32 mt-6">
      <label htmlFor="total" className="p-2 mr-32 font-bold">
        Total:{total}
      </label>
      {/* <div className= "block ml-12 font-bold"></div> */}
    </div>

  
  </div>
</div>

  </div>
  <div className="ml-6">
 
 <textarea
 placeholder="Additional Notes"
   className="rounded-md border-2 w-96 border-gray-400 p-2"
   value={notes}
   onChange={(e) => setnotes(e.target.value)}
 />
</div>
  {/* Add a button for submitting the form here */}






</div>
        
          <div className={`receipt ${showReceipt ? 'visible' : 'hidden'}`} ref={componentRef}>
          <div className="bg-white border rounded-lg shadow-lg p-8 mt-8">
  <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
   Invoice
  </h1>
  <hr className="mb-2" />
  <div className="flex justify-between mb-1">
    <h1 className="text-lg font-bold"></h1>
    <div className="text-gray-700">
      <div className="font-bold ">Invoice Date :{date}</div>
    
      <div className="font-bold ">Invoice : {invoiceNumber}</div>
    </div>
  </div>
  <div className="mb-8">
  <h2 className="text-lg font-bold mb-4">Bill From:</h2>
    <div className="text-gray-700 mb-2 text-md">{billFrom}</div>
    <div className="text-gray-700 mb-2">{address}</div>
    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
    <div className="text-gray-700 mb-2">{billTo}</div>
    <div className="text-gray-700 mb-2">{address}</div>
    <div className="text-gray-700 mb-2">{contact}</div>
  </div>
  <table className="w-full mb-8 border">
    <thead className="border">
      <tr>
        <th className="text-left font-bold text-gray-700">Description</th>
        <th className="text-center font-bold text-gray-700">Quantity</th>
        <th className="text-center font-bold text-gray-700">Price</th>
        <th className="text-center font-bold text-gray-700">Amount</th>
      </tr>
    </thead>
    <tbody className="border">
      {rows.map((row, index) => (
        <tr key={index}>
          <td className="p-2">
            <input
              type="text"
              className="w-full p-1"
              name="description"
              value={row.description}
              onChange={(e) => updateRow(index, 'description', e.target.value)}
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              className="w-full p-1 text-center"
              name="quantity"
              value={row.quantity}
              onChange={(e) => updateRow(index, 'quantity', e.target.value)}
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              className="w-full p-1 text-center"
              name="price"
              value={row.price}
              onChange={(e) => updateRow(index, 'price', e.target.value)}
            />
          </td>
          <td className="p-2">
            <p className="text-center">{row.amount}</p>
          </td>
        </tr>
      ))}
    </tbody>
   {/* ... (your previous code) */}
<tfoot className="mt-4">
  <tr>
    <td colSpan="3" className="text-right font-bold text-gray-700">
      Tax:
    </td>
    <td className="text-right font-bold text-gray-700">{tax}</td>
  </tr>
  <tr>
    <td colSpan="3" className="text-right font-bold text-gray-700">
      Shipping Cost:
    </td>
    <td className="text-right font-bold text-gray-700">{shippingCost}</td>
  </tr>
  <tr>
    <td colSpan="3" className="text-right font-bold text-gray-700">
      advancepayment:
    </td>
    <td className="text-right font-bold text-gray-700">{advancepayment}</td>
  </tr>
  <tr>
    <td colSpan="3" className="text-right font-bold text-gray-700">
      Total:
    </td>
    <td className="text-right font-bold text-gray-700">{total}</td>
  </tr>
</tfoot>
</table>
<div className="text-gray-700 mb-2">
 <span>{notes}</span>
</div>
{/* ... (your code continues) */}

</div>


          </div>
        </div>
      
    </>
  );
};

export default Invoice;
