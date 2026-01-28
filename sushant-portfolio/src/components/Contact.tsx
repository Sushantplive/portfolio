import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
  <section id="contact" className="pt-12 sm:pt-20 bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open. Feel free to reach out, and I’ll get back to you as soon as possible!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Section */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Email</h3>
            <p className="text-gray-300 mb-4">sushant.paikrao.dev@gmail.com</p>
            <a
              href="mailto:sushant.paikrao.dev@gmail.com"
              className="inline-block px-6 py-2 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-cyan-300 transition-colors duration-300"
            >
              Send an Email
            </a>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/sushantpaikrao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-4xl transition-transform transform hover:scale-125"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/sushantpaikrao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-4xl transition-transform transform hover:scale-125"
                title="X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
