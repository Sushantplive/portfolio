import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./contact.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/sushantpaikarao/";
const PHONE_DISPLAY = "+91 81421 74853";
const PHONE_TEL = "+918142174853";
const WHATSAPP_URL = "https://wa.me/918142174853";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section site-section py-12 sm:py-20 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          Get in Touch
        </h2>

        <div className="availability-card mb-10 mx-auto max-w-lg p-5 rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="availability-dot" />
            <span className="text-emerald-400 font-bold text-lg">Open to Opportunities</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Work Preference</p>
              <p className="text-white font-semibold">Remote &amp; global teams</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Notice Period</p>
              <p className="text-white font-semibold">3 months · negotiable</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-400 mb-1">Expected CTC</p>
              <p className="text-white font-semibold">As per industry standards</p>
            </div>
          </div>
        </div>

        <div className="contact-grid">
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

          <div className="contact-card p-6 rounded-lg transition-shadow duration-300">
            <h3 className="contact-card__title text-xl font-semibold text-cyan-400 mb-4">Phone</h3>
            <p className="contact-card__text text-gray-300 mb-4">{PHONE_DISPLAY}</p>
            <div className="contact-card__actions">
              <a
                href={`tel:${PHONE_TEL}`}
                className="contact-primary-btn inline-flex items-center justify-center gap-2 px-6 py-2 text-gray-900 font-semibold rounded-lg shadow transition-colors duration-300"
              >
                <FaPhone aria-hidden="true" />
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-secondary-btn inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-lg shadow transition-colors duration-300"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-card p-6 rounded-lg transition-shadow duration-300">
            <h3 className="contact-card__title text-xl font-semibold text-cyan-400 mb-4">LinkedIn</h3>
            <p className="contact-card__text text-gray-300 mb-4">linkedin.com/in/sushantpaikarao</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-primary-btn inline-flex items-center justify-center gap-2 px-6 py-2 text-gray-900 font-semibold rounded-lg shadow transition-colors duration-300"
            >
              <FaLinkedinIn aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-social mt-8">
          <p className="contact-social__label text-gray-400 text-sm mb-4">Also find me on</p>
          <div className="flex justify-center flex-wrap gap-6">
            <a
              href="https://github.com/Sushantplive"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link text-4xl transition-transform transform hover:scale-125"
              title="GitHub"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/sushantpaikrao/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link text-4xl transition-transform transform hover:scale-125"
              title="Instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/sushantpaikrao"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link text-4xl transition-transform transform hover:scale-125"
              title="X"
              aria-label="X"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
