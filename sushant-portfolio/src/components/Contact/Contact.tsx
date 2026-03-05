import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./contact.css";

const Contact: React.FC = () => {
  return (
  <section id="contact" className="contact-section pt-12 sm:pt-20 bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-cyan-400 mb-8">
          Get in Touch
        </h2>
        <p className="contact-intro text-lg text-gray-300 leading-relaxed mb-12">
          Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open. Feel free to reach out, and I’ll get back to you as soon as possible!
        </p>

        <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Section */}
          <div className="contact-card p-6 rounded-lg transition-shadow duration-300">
            <h3 className="contact-card__title text-xl font-semibold text-cyan-400 mb-4">Email</h3>
            <p className="contact-card__text text-gray-300 mb-4">sushant.paikarao.dev@gmail.com</p>
            <a
              href="mailto:sushant.paikarao.dev@gmail.com"
              className="contact-primary-btn inline-block px-6 py-2 text-gray-900 font-semibold rounded-lg shadow transition-colors duration-300"
            >
              Send an Email
            </a>
          </div>

          {/* Social Media Section */}
          <div className="contact-card p-6 rounded-lg transition-shadow duration-300">
            <h3 className="contact-card__title text-xl font-semibold text-cyan-400 mb-4">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/sushantpaikrao/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link text-4xl transition-transform transform hover:scale-125"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/sushantpaikrao"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link text-4xl transition-transform transform hover:scale-125"
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
