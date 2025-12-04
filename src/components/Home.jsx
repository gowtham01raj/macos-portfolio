import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React from "react";

// Ensure Draggable is registered (can also be done in App.jsx)
gsap.registerPlugin(Draggable);

const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  // Safely get projects from constants
  const projects = locations.work?.children || [];

  // Enable dragging for elements with class ".folder"
  useGSAP(() => {
    Draggable.create(".folder", {
      bounds: "#home", // Optional: keeps folders within the screen
      inertia: true,   // Optional: adds momentum
    });
  }, []);

  const handleOpenProjectFinder = (project) => {
    // 1. Set the specific project folder as the active location in Finder
    setActiveLocation(project);
    // 2. Open the Finder window
    openWindow("finder");
  };

  return (
    <section id="home" className="w-full h-full relative z-10">
      <ul className="w-full h-full">
        {projects.map((project) => (
          <li
            key={project.id}
            // 1. "folder" class is targeted by GSAP Draggable
            // 2. project.windowPosition (e.g., "top-10 left-10") sets initial placement
            className={clsx(
              "absolute flex flex-col items-center gap-2 cursor-pointer group folder",
              project.windowPosition
            )}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img
              src="/images/folder.png" // Ensure you have a folder icon in public/images
              alt={project.name}
              className="w-16 h-16 object-contain group-hover:scale-105 transition-transform"
            />
            <p className="text-white text-xs font-medium drop-shadow-md px-2 py-1 rounded bg-black/20 group-hover:bg-black/40 transition-colors">
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;