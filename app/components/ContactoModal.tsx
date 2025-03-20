import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

interface ContactoModalProps {
  selectedProduct?: string;
  closeContactPanel: () => void;
}

interface FormData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactoModal: React.FC<ContactoModalProps> = ({ selectedProduct, closeContactPanel }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: `Hello, I am interested in ${selectedProduct || 'this product'}.`,
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        message: `Hello, I am interested in ${selectedProduct}.`,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    emailjs
      .send('service_ih9parg', 'template_god7cuo', formData, '4l9lg7uEBWREWNjzG')
      .then(() => {
        setFormData({ name: '', lastName: '', email: '', phone: '', message: '' });
        setSuccess('Your message has been sent successfully!');
      })
      .catch(() => {
        setError('Failed to send message. Try again later.');
      });
  };

  const encodedMessage = encodeURIComponent(formData.message);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
        <button
          onClick={closeContactPanel}
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-4">Contact Us about {selectedProduct || 'this product'}</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-4 space-x-4">
            <a
              href={`https://wa.me/+14076837106?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-green-500 hover:text-green-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.instagram.com/newforceconstruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-500 hover:text-pink-600"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/share/tGtd6kqaN6ZwLfsR/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ContactoModal;
