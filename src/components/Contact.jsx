import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-4">
          I’m open to opportunities and collaborations. Let’s connect!
        </p>

        <div className="flex flex-col items-center space-y-4 text-lg">
          <div className="flex items-center gap-3 text-gray-800">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>pranit.shinde@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
