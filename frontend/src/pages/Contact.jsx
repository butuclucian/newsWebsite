import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    console.log("Form submitted:", { name, email, message });
    setStatus('Message sent successfully! (Simulated)');
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="mt-25  flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-[28rem] space-y-6 p-8 rounded-xl shadow-lg">

        {/* ----title---- */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="text-sm text-gray-400 mt-1"> Have a question or want to work together?</p>
        </div>


        {/* ----form---- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}className="w-full px-4 py-2 rounded-md bg-[#212121] text-white placeholder-gray-500 focus:outline-none"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-md bg-[#212121] text-white placeholder-gray-500 focus:outline-none"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea rows="4" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 rounded-md bg-[#212121] text-white placeholder-gray-500 focus:outline-none"/>
          </div>

          <button type="submit" className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition cursor-pointer">Send Message</button>

          {status && (
            <p className={`text-center text-sm ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
          )}
        </form>

        
      </div>
    </div>
  );
}

export default Contact;
