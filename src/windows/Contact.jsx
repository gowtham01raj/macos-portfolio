import { WindowControls } from "#components";
import { socials } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="absolute w-3xl left-40 top-20 shadow-2xl drop-shadow-2xl overflow-hidden rounded-xl">
        <div id="window-header">
          <WindowControls target={"contact"} />
          <h2 className="font-bold text-sm text-center w-full">Contact me</h2>
        </div>
        <div className="p-5 space-y-5 bg-white flex h-full ">
          <img
            src="/images/adrian.jpg"
            alt="gowtham"
            className="w-20 rounded-full"
          />
          <h3 className="text-xl font-semibold">Let's Connect</h3>
          <p>got an idea? bug to squash?or just wanna talk tech</p>
          <ul className="flex items-center gap-3">
            {socials.map(({ id, bg, link, icon, text }) => (
              <li className="rounded-lg p-3 w-60 hover:-translate-y-0.5 hover:scale-105 origin-center transition-all duration-300" id={id} style={{ backgroundColor: bg }}>
                <a className="space-y-5" href={link} target="_blan" rel="noopener" title={text}>
                  <img src={icon} alt="text" className="size-5" />
                  <p className="">{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
const ContactWindow = windowWrapper(Contact, "contact");
export default ContactWindow;
