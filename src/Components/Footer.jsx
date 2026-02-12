import { FaFacebookF, FaTwitter, FaPinterest, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 h-135">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-y-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 ">
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Get in Touch</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex gap-4 mt-6">
              <a href="" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                <FaPinterest size={18} />
              </a>
              <a href="" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                <FaGooglePlusG size={18} />
              </a>
              <a href="" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Dresses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Sunglasses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Newsletter</h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-orange-500"
              />
              <button className="bg-black text-white px-6 py-3 uppercase font-semibold hover:bg-orange-500 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center flex flex-col gap-y20">
          <p className="text-gray-600 text-sm">
            Copyright © 2022 <span className="text-gray-800">Shopify Theme</span> Developed by{' '}
            <span className="text-gray-800">MassTechnologist</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;