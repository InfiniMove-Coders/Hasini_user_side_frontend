import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3 space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Call To Us</h2>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Write To Us</h2>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
          <p className="text-sm">support@exclusive.com</p>
        </div>
      </div>

      <div className="md:w-2/3">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="p-2 rounded border border-gray-300 w-full bg-gray-50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="p-2 rounded border border-gray-300 w-full bg-gray-50"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone *"
              required
              className="p-2 rounded border border-gray-300 w-full bg-gray-50"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="p-2 rounded border border-gray-300 w-full bg-gray-50"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors float-right"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;