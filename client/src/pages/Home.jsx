import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import recieptImage from '../assets/reciept.png';  
import email from '../assets/email.png'; 
import csv from '../assets/csv.png'; 

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className="bg-gray-200 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Digital Receipt!
        </h1>
        <p className="text-lg text-gray-600">
          Explore our services and discover all digital receipt
          
        </p>
        <div className='flex justify-center mt-18'>
        <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
  <div className="h-64 bg-cover hover:bg-gray">
    <img src={recieptImage} alt="avatar" className="w-full h-full object-cover" />
    {/* The 'object-cover' class ensures the image covers the entire container */}
  </div>
  <div className="mx-6 my-4 border-b border-gray-light">
    <div className="font-medium text-base text-gray-darker mb-4">
    Generate Invoice and Others Receipt
    </div>
   
    <p className="font-normal text-gray-dark text-sm mb-4">
      Free and Easily generate your receipt.
    </p>
    <p className="font-normal text-gray-dark text-sm mb-4">
    Unlimited invoice and receipt
    </p>
  </div>
</div>

<div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
  <div className="h-64 bg-cover hover:bg-gray">
    <img src={email} alt="avatar" className="w-full h-full object-cover" />
    {/* The 'object-cover' class ensures the image covers the entire container */}
  </div>
  <div className="mx-6 my-4 border-b border-gray-light">
    <div className="font-medium text-base text-gray-darker mb-4">
       Send Receipt Email whatsapp 
    </div>
    <p className="font-normal text-gray-dark text-sm mb-2">
      Generate Your Reciept and Download
    </p>
    <p className="font-normal text-gray-dark text-sm mb-4">
     Send attact file Email What's App Directly
    </p>
  </div>
</div>
<div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
  <div className="h-64 bg-cover hover:bg-gray">
    <img src={csv} alt="avatar" className="w-full h-full object-cover" />
    {/* The 'object-cover' class ensures the image covers the entire container */}
  </div>
  <div className="mx-6 my-4 border-b border-gray-light">
    <div className="font-medium text-base text-gray-darker mb-4">
     Convert to CSV
    </div>
    <p className="font-normal text-gray-dark text-sm mb-2">
      Convert your invoice data to csv file 
    </p>
    <p className="font-normal text-gray-dark text-sm mb-4">
      Collect your customer data
    </p>
  </div>
</div>

</div>


      </div>

  <section className="container mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefits Cards */}
            {[
              { title: 'Time-Saving', description: 'Save time with automated receipt generation.' },
              { title: 'Professional Look', description: 'Impress clients with professionally designed digital receipts.' },
              { title: 'Multi-Purpose', description: 'Suitable for rentals, tuition, payments, and invoicing.' },
              { title: 'Secure', description: 'Securely store and organize receipts for easy reference.' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="container mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Steps 1-5 */}
            {["1.Choose receipt", "2.Give Data", "3.Download Receipt", "4.Send to Email", "5.Save csv"].map((step) => (
              <div key={step} className="text-center">
                <span className="text-2xl font-bold text-blue-500">{step}</span>
                {/* <p className="text-lg"> {step}</p> */}
              </div>
            ))}
          </div>
        </section>


           <Footer></Footer>
        </div>
    );
};

export default Home;