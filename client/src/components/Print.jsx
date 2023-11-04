import React from 'react';

const Print = () => {
    return (
      <>
       <div className="container  mx-auto mt-10 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto   ">
          <div className="bg-white shadow-lg p-8">
       <h1 className="text-1xl font-semibold mb-4  text-gray-600 flex justify-center mr-16">Payment Receipt</h1>
            <div className="mx-auto max-w-md">
            <form>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="from"  className="block text-sm font-sm text-gray-600 gap-x-4   ">
                    From:
                  </label>
                  
                  
                </div>
                
    
                <div className="flex-1">
                  <label htmlFor="to" className="block text-sm  text-gray-600">
                    To:
                  </label>
                
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Payment Amount:
                  </label>
                
                </div>
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Due Amount:
                  </label>
                
                </div>
              </div>
            
           
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="paymentAmount" className="block text-sm  text-gray-600">
                    Payment Date
                  </label>
                 
                </div>
                <div className="flex-1">
                  <label htmlFor="dueAmount" className="block text-sm  text-gray-600">
                    Next Due Date
                  </label>
                
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
                  placeholder=' Address'
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
                />
              </div>
             </form>
            </div>
            <div className="flex space-x-4 mt-4">
                <div className="flex-1">
                  <label htmlFor="senderSignature" className="block text-sm ml-12 text-gray-600 mb-8">
                    Sender Signature:
                  </label>
                  {/* <div className="border border-gray-400 h-8 rounded-md p-2">
                    
                  </div> */}
                </div>
                <div className="flex-1">
                  <label htmlFor="receiverSignature" className="block text-sm text-gray-600 ml-16 mb-8">
                    Receiver Signature:
                  </label>
                  {/* <div className="border border-gray-400 h-8 rounded-md p-2">
                   
                  </div> */}
                </div>
              </div>
          </div>
        </div>
      
      
      </>
    );
};

export default Print;