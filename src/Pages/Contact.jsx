import React, { useState } from 'react';
import { images } from '../constant';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Contact = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(value && !emailRegex.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const back = {
    backgroundImage: `url(${images.Gallerys.Gallery13})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgrounReapet: "no-repeat"

  }

  return (
    <div className="min-h-screen">
        <NavBar />
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center" >
        <div className="absolute inset-0 bg-black bg-opacity-40" style={back}>
            
        </div>
        
        <h1 className="relative text-white text-5xl md:text-6xl font-bold uppercase tracking-wide">
          CONTACT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          <div className="w-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123456789!2d-83.123456!3d42.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2300%20Traverwood%20Dr%2C%20Ann%20Arbor%2C%20MI%2048105!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
            
            <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
              <h3 className="font-bold text-lg mb-2">2300 Traverwood Dr</h3>
              <p className="text-gray-600 text-sm">2300 Traverwood Dr, Ann Arbor, MI 48105, USA</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=2300+Traverwood+Dr+Ann+Arbor+MI+48105" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-orange-500 text-sm mt-2 inline-block transition-colors duration-300"
              >
                Directions
              </a>
              <button className="text-blue-600 hover:text-orange-500 text-sm mt-2 block transition-colors duration-300">
                View larger map
              </button>
            </div>
          </div>

          <div className="w-full">
            {emailError && (
              <div className="mb-4 text-red-600 text-sm">
                The email is invalid
              </div>
            )}

            <h2 className="text-3xl font-semibold mb-8">Send us your message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:border-orange-500 transition-colors duration-300`}
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500 resize-none transition-colors duration-300"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black text-white px-12 py-3 rounded-full uppercase font-semibold hover:bg-orange-500 transition-colors duration-300"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Contact;