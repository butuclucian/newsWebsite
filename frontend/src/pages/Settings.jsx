import React from 'react';

const Settings = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-30 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-[#7e8082]">Settings</h1>
      
      {/* Settings Section */}
      <div className="bg-[#212121] p-10 rounded-lg w-full max-w-[600px] shadow-lg dark:bg-[#7e8082]/80">
        <div className="text-center mb-6">
          <p className="text-xl font-semibold">User Preferences</p>
          <p className="text-lg text-gray-400 dark:text-white">Adjust your account settings below</p>
        </div>

        <div className="space-y-4">
          {/* Setting Option 1 */}
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Notification Settings</p>
            <button className="bg-[#EDE618] cursor-pointer text-black px-4 py-2 rounded-full font-medium dark:text-white dark:hover:text-black dark:transition dark:duration-300">
              Change
            </button>
          </div>

          {/* Setting Option 2 */}
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Privacy Settings</p>
            <button className="bg-[#EDE618] cursor-pointer text-black px-4 py-2 rounded-full font-medium dark:text-white dark:hover:text-black dark:transition dark:duration-300">
              Change
            </button>
          </div>

          {/* Setting Option 3 */}
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Account Settings</p>
            <button className="bg-[#EDE618] cursor-pointer text-black px-4 py-2 rounded-full font-medium dark:text-white dark:hover:text-black dark:transition dark:duration-300">
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="mt-8">
        <button className="text-[#EDE618] text-lg dark:text-[#7e8082]">
          <a href="/">Back to Home</a>
        </button>
      </div>
    </div>
  );
};

export default Settings;
