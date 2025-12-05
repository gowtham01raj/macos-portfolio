import { WindowControls } from "#components";
import { socials } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div id="window-header">
        <WindowControls target="contact" />
        <h2 className="font-bold text-sm text-center w-full">Contact Me</h2>
      </div>
      <div className="flex flex-1 p-8 gap-8 bg-white min-h-[400px]">
        {/* Left: Profile & Socials */}
        {/* Left: Profile & Socials */}
        <div className="w-1/2 flex flex-col justify-between border-r pr-8 border-gray-100">
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4">
                <img
                  src="/images/adrian.jpg"
                  alt="Profile"
                  className="size-16 rounded-full object-cover shadow-md"
                />
                 <div>
                  <h3 className="text-xl font-bold text-gray-800">Gowtham</h3>
                  <p className="text-xs text-blue-500 font-medium">Full Stack Developer</p>
                </div>
              </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Let's Connect</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
              {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-24 rounded-xl p-4 flex flex-col justify-between text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                    style={{ backgroundColor: social.bg }}
                  >
                    <img src={social.icon} alt={social.text} className="size-6 invert brightness-0" />
                    <span className="text-sm font-bold tracking-wide">
                      {social.text}
                    </span>
                  </a>
              ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 flex flex-col gap-5">
            <h3 className="text-lg font-bold text-gray-800">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-500">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-500">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-500">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-gray-400"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};
const ContactWindow = windowWrapper(Contact, "contact");
export default ContactWindow;
