import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter your email.');
      setError(true);
      return;
    }

    try {
      await axios.post('http://localhost:5000/subscribe', { email });
      setMessage('✅ Check your inbox!');
      setError(false);
      setEmail('');
    } catch (err) {
      setMessage('❌ Subscription failed. Try again.');
      setError(true);
    }
  };

  return (
    <footer className="w-full text-white bg-[#212121] mt-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32 pt-8">
        <div className="flex flex-col md:flex-row justify-center gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <div className="flex items-center gap-4 mb-6">
              <img src={assets.logo} alt="logo" className="rounded-full h-12" />
              <p className="text-2xl font-bold text-[#EDE618]">newsWebsite</p>
            </div>
            <p className="mt-6 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
            </p>
          </div>

          <div className="flex-1 flex flex-col md:flex-row items-center md:items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-[#EDE618]">Company</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-[#EDE618] mb-5">Subscribe to our newsletter</h2>
              <div className="text-sm space-y-2">
                <p>The latest news, articles, and resources sent to your inbox weekly.</p>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    className="border border-gray-500/30 placeholder-gray-500 outline-none w-full max-w-64 h-9 rounded px-2 text-white"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleSubscribe}
                    className="hover:bg-[#EDE618] hover:text-black hover:shadow-[0px_0px_30px_#EDE618]/20 bg-[#EDE618]/80 transition-all cursor-pointer px-6 py-2 rounded text-white font-medium"
                  >
                    Subscribe
                  </button>
                </div>
                {message && (
                  <p className={`text-sm mt-2 ${error ? 'text-red-400' : 'text-green-400'}`}>
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2025 © newsWebsite name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
