'use client';
import { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    captcha: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.date &&
      formData.time &&
      formData.message &&
      formData.captcha === '27'
    ) {
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
        captcha: '',
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Appointment Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#2C5282] mb-6">Book An Appointment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-600">
                  United Arab Emirates<br />
                  Dubai Healthcare City<br />
                  Building A, 2nd Floor
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
                <p className="text-gray-600">Email: info@trustcare.com</p>
                <p className="text-gray-600">Phone: +971 4 XXX XXXX</p>
                <p className="text-gray-600">WhatsApp: +971 50 XXX XXXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Saturday – Thursday: 09:00 am To 09:00 pm<br />
                  Friday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your appointment request has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="date">Appointment Date</label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="time">Appointment Time</label>
                  <input
                    type="time"
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">14 + 13 = ?</label>
                  <input
                    type="text"
                    value={formData.captcha}
                    onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#2C5282]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2C5282] text-white py-2 px-4 rounded-md hover:bg-[#1A365D] transition duration-300"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}