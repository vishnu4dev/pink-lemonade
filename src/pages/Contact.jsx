import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-pink-500/10 to-yellow-300/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
      <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center font-serif">Get in Touch</h2>
      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-pink-100 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-xl bg-white/5 border border-pink-500/20 text-white focus:ring-2 focus:ring-yellow-300"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-pink-100 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-xl bg-white/5 border border-pink-500/20 text-white focus:ring-2 focus:ring-yellow-300"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-pink-100 mb-2">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-3 rounded-xl bg-white/5 border border-pink-500/20 text-white focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-pink-100 mb-2">Enquiry</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 rounded-xl bg-white/5 border border-pink-500/20 text-white focus:ring-2 focus:ring-yellow-300"
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-yellow-300 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default Contact;