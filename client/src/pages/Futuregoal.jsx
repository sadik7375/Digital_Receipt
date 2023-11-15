import React from 'react';
import Navbar from '../components/Navbar';

const Futuregoal = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-300 p-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">
    Welcome to Digital Receipts – Where Efficiency Meets Innovation!
  </h1>
  <p className="text-lg text-gray-600">
    At [Your Company Name], we're committed to shaping the future of digital receipt management. Our upcoming initiative involves seamlessly connecting our platform to a powerful backend infrastructure and a secure database. This evolution will introduce a range of exciting features aimed at enhancing your overall experience:
  </p>

  <div className="mt-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">
      What's Coming Soon:
    </h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>Effortless Receipt Storage: Connect to a robust backend and secure database for seamless and reliable data storage.</li>
      <li>Automated Updates: Receive real-time notifications for new receipts and updates, ensuring you're always in the loop.</li>
      <li>Enhanced Accessibility: Enjoy anytime, anywhere access to your receipts with an intuitive user interface.</li>
      <li>Data Security: Rest assured that your sensitive transaction information is stored securely, prioritizing data protection.</li>
      <li>Personalized User Experience: Tailor your preferences and settings for a more personalized and efficient user journey.</li>
    </ul>
  </div>

  <p className="text-lg mt-6 text-gray-600">
    We believe these enhancements will not only streamline your receipt management but also elevate your overall satisfaction with our service. Stay tuned for a more connected and efficient digital receipt experience!
  </p>
</div>

        </div>
    );
};

export default Futuregoal;