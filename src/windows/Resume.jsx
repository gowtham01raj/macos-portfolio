import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";
import { Download } from "lucide-react";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={"resume"} />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer "
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <Document file={"files/resume.pdf"}>
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};
const ResumeWindow = windowWrapper(Resume, "resume");
export default ResumeWindow;
