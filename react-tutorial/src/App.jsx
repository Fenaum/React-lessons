import {useState, useEffect} from "react";
import WindowTracker from "./components/WindowsTracker";

export default function App() {

  console.log(useState())
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */
const [show, setShow] = useState(true);
console.log(useState())
function handleClick() {
  setShow((prevShow) => !prevShow);
;}



  return (
    <div className="container">
      <button onClick={handleClick}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
