import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold mb-8">📫 Connect with me</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/sushantpaikarao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="h-10 hover:scale-110 transition"
          />
        </a>
        <a
          href="https://x.com/SushantDevP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            alt="X (Twitter)"
            className="h-10 hover:scale-110 transition"
          />
        </a>
        <a href="mailto:sushant.paikrao.dev@gmail.com">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gmail/gmail-original.svg"
            alt="Email"
            className="h-10 hover:scale-110 transition"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
