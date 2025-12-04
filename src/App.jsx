import { Dock, Home, NavBar, Welcome } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;
