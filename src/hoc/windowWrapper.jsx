import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const windowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const ref = useRef(null);
    const { focusWindow, windows } = useWindowStore();

    const { isOpen, zIndex } = windows[windowKey];

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";
      gsap.fromTo(
        el,
        {
          scale: 0.8,
          opacity: 0,
          y: 40,
        },
        { scale: 1, opacity: 1, y: 0, duration: 5, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        // 2. Add Focus Logic: clicking the window should bring it to front
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  // 3. CRITICAL FIX: Return the component function, NOT a JSX element
  return Wrapped;
};

export default windowWrapper;
