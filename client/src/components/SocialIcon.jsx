import React from 'react';
import { FaFacebook,FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
const SocialIcon = () => {
    return (
        <div>
            <div className="flex items-center space-x-4">
                 <label  className="rounded-md text-gray-400 p-1 text-sm">Send Receipt   </label>
                  <div className="flex items-center space-x-2">
                   
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"> < CgMail className="text-blue-500 cursor-pointer " size={23} /></a>
                  <a href="https://web.whatsapp.com/">  <FaWhatsapp className="text-[#00a884ff] cursor-pointer" size={20} /></a>
                    <FaFacebook className="text-blue-500 cursor-pointer" size={18} />
                   
                  </div>
                </div>
        </div>
    );
};

export default SocialIcon;