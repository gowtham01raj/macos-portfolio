import React from "react";
import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import { Download, Share2 } from "lucide-react";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = name || "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name || "Image"}</h2>
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={handleDownload}
            title="Download image"
            className="cursor-pointer hover:opacity-75 transition-opacity"
          >
            <Download className="icon" size={20} />
          </button>
          <Share2 className="icon cursor-pointer hover:opacity-75 transition-opacity" size={20} />
        </div>
      </div>

      <div className="image-file-content p-6 flex items-center justify-center overflow-auto max-h-96">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="rounded-lg shadow-lg max-w-full max-h-80 object-contain"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image, "imgfile");
export default ImageWindow;
