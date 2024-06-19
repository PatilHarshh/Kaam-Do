import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be 10 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Add form submission logic here
    }
  };

  return (
    <div className="max-w-md mx-auto p-10 mt-16 bg-gradient-to-r from-orange-200 to-yellow-200 border border-gray-300 rounded-lg shadow-2xl">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          />
          {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Send us your message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 resize-none"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-md hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Submit
        </button>
        <br/>
        <br/>
      </form>
    </div>
  );
};

export default ContactForm;
