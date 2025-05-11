import React from 'react';
import { assets } from '../assets/assets';

const MyAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 sm:mt-30 mr-5 ml-5 text-white ">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center dark:text-[#7e8082]">My Account</h1>
      
      {/* Profile Section */}
      <div className="bg-[#212121] p-6 sm:p-10 rounded-lg w-full max-w-[500px] shadow-lg dark:bg-[#7e8082]">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img 
            src={assets.admin} 
            alt="User Profile" 
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
          />
        </div>

        <div className="text-center mb-6">
          <p className="text-xl sm:text-2xl font-semibold">admin</p>
          <p className="text-lg text-gray-400 dark:text-white">admin@news.com</p>
        </div>

        <div className="text-center space-y-4">
          <button className="bg-[#EDE618] cursor-pointer text-black px-6 py-2 rounded-full font-medium w-full">
            Edit Profile
          </button>
          <button className="bg-[#131313] dark:bg-white dark:text-black cursor-pointer text-white px-6 py-2 rounded-full font-medium w-full">
            Delete Account
          </button>
        </div>
      </div>

      {/* Additional Options */}
      <div className="mt-6 sm:mt-8">
        <button className="text-[#EDE618] text-lg dark:text-[#7e8082]">
          <a href="/">Back to Home</a>
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
