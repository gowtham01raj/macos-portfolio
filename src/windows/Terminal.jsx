import { techStack } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import { Check, Flag } from "lucide-react";
import { WindowControls } from "#components";
const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack text-sm font-roboto p-5">
        <p>
          <span className="font-bold">@Gowtham % </span>
          show tech stack
        </p>
      </div>
      <div className="label flex items-center ms-10 mt-7">
        <p className="w-32">Category</p>
        <p>Technologies</p>
      </div>
      <ul className="content py-5 my-5 border-y border-dashed space-y-1">
        {techStack.map(({ category, items }) => (
          <li key={category} className="flex items-center">
            <Check className="check text-[#00A154] w-5" size={20} />
            <h3 className="font-semibold text-[#00A154] w-32 ms-5">
              {category}
            </h3>
            <ul className="flex items-center gap-3">
              {items.map((item, i) => (
                <li key={i}>
                  {item}
                  {i < items.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="footnote text-[#00A154] space-y-1">
        <p>
          <Check size={20} /> 5 of 5 stacks loaded successfully
        </p>
        <p className="text-black">
          <Flag size={15} fill="black" /> Render time: 6ms
        </p>
      </div>
    </>
  );
};
const TerminalWindow = windowWrapper(Terminal, "terminal");

export default TerminalWindow;
