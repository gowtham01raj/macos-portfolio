import { Dock, NavBar, Welcome } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import TerminalWindow from "#windows/Terminal";
import { Terminal } from "lucide-react";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />
      <TerminalWindow/>
    </main>
  );
};

export default App;
