'use client'
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/component/footer';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && message) {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 text-lime-200">Get in Touch</h1>
      <p className="text-lg mb-8">Please fill out the form below to send me a message.</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="name" className="text-lg font-medium text-green-300">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 text-green-950"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="email" className="text-lg font-medium text-green-300">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 text-green-950"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="message" className="text-lg font-medium text-green-300">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 text-green-950"/>
        </div>
        <button type="submit" className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-lg focus:ring-lime-500 focus:border-lime-500"
        >
          Send Message
        </button>
        {success && (
          <p className="text-lg text-green-500 mt-4">Message sent successfully!</p>
        )}
      </form>

      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-lime-200">Contact Information</h2>
        <div className="flex items-center mb-4">
          <Image src={'/image/Linkedin-logo.png'} alt='' width={40} height={40} className='rounded-3xl mr-5'/>
          <a href="https://www.linkedin.com/in/hussain-raza-0704a32b6/" className="text-lg" >LinkedIn Profile</a>
        </div>
        <div className="flex items-center">
        <Image src={'/image/phone.png'} alt='' width={40} height={40} className='rounded-3xl mr-5'/>
          <p className="text-lg">+9234567890</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUsPage;