import React from 'react';
import { useReactToPrint } from 'react-to-print';
import Print from './Print';
import ReactToPrint from 'react-to-print';


const Downloadbtn = () => {

    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      
    });


    return (
        <div>
           
                {/* <Print ref={componentRef}  ></Print> */}
                <ReactToPrint trigger={()=><button className="rounded-md bg-blue-800 text-white p-1 text-sm" onClick={handlePrint}>Download Receipt</button>} content={()=>componentRef.current}  ></ReactToPrint>

        </div>
    );
};

export default Downloadbtn;