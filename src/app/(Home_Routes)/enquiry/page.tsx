"use client";

import FAQ from "@/src/components/FAQ";
import HeroSection from "@/src/components/Herosection";
import React, { ChangeEvent, useState } from "react";
import { FaDirections } from "react-icons/fa";
import { FaqData } from "../../constant";

const Enquiry = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const [Loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid JSON response. Check API endpoint.');
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email.');
      }

      setResponseMessage('Email Sent!');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred.');
    } finally {
      setLoading(false)
    }
  };





  return (
    <div className="w-full">
      <HeroSection img={"/img/contact.jfif"} tittle={"Contact Us"} />

      <div className=" bg-white">
        
        <main className="max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-10 md:py-16">
          <p className="text-[30px] md:text-3xl xl:text-[30px] font-bold xl:mb-10">
            Send Us a Message
          </p>

          <div className="flex mb-0 flex-col gap-10 md:flex-row xl:flex-row-reverse">

            <div className="flex flex-col gap-6 w-full md:w-[50%] xl:w-[440px] xl:h-[510px] mt-4">
              <iframe
                className="h-full w-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14137.003624034116!2d85.34463115!3d27.6477079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1738831163526!5m2!1sen!2snp"
                loading="lazy"
              />
              <div className="flex items-center justify-center gap-5 border rounded-lg shadow-sm">
                <FaDirections className="h-[16px] w-[16px]" />
                <button className="h-[48px] text-base">Get Directions</button>
              </div>
            </div>

            <form
              className="w-full md:w-[50%] xl:w-[60%]"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-base font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 mb-4 block h-12 w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 mb-4 block h-12 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-base font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-2 mb-4 block h-12 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  className="mt-2 mb-4 block h-32 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your message"
                  required
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-base rounded-lg px-8 py-3 "
              >
                {
                  responseMessage ? (
                    <p>{responseMessage}</p>
                  ) : Loading ? (
                    <p>Loading...</p>
                  ) : (
                    <p>Send Message</p>
                  )
                }

              </button>
            </form>

          </div>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </main>

      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-8 py-10 md:py-16">
        <p className="font-bold text-center text-xl md:text-2xl xl:text-4xl"> Frequently Asked Questions </p>
        <div className="max-w-3xl mx-auto mt-10">
          {
            FaqData.map((item, idx) => (
              <div key={idx} className="mb-5">
                <FAQ item={item} />
              </div>
            ))
          }
        </div>

      </div>

    </div>

  );
};

export default Enquiry;
