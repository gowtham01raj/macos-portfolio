import React from "react";
import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name || "Text File"}</h2>
      </div>

      <div className="text-file-content p-6 space-y-4 overflow-y-auto max-h-96">
        {image && (
          <div className="mb-4">
            <img src={image} alt={name} className="rounded-lg max-w-xs" />
          </div>
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        )}

        {description && Array.isArray(description) && (
          <div className="space-y-2">
            {description.map((para, idx) => (
              <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");
export default TextWindow;
