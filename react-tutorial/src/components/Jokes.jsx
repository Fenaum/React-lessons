import { useState } from "react";

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
const [isShown, setIsShown] = useState(false);

function toggle() {
    setIsShown(prevIsShown => !prevIsShown)
    console.log(isShown);
}

  return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown ? <button onClick={toggle} >Hide Punchline</button> : <button onClick={toggle}>Show Punchline</button>}
        {isShown && <p>{props.punchline}</p>}
    <hr />
    </div>
    );
}
