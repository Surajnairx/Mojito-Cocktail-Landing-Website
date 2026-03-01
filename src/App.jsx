import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
