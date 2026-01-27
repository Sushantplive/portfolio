import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8 bg-gray-900 bg-opacity-30 text-white text-center flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">📫 Connect with me</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/sushantpaikarao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="h-10 hover:scale-110 transition opacity-80 hover:opacity-100"
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
            className="h-10 hover:scale-110 transition opacity-80 hover:opacity-100"
          />
        </a>
        <a href="mailto:sushant.paikrao.dev@gmail.com">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Email"
            className="h-10 hover:scale-110 transition opacity-80 hover:opacity-100"
          />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
