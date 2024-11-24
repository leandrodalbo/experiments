import { useState } from "react";
import MyButton from "./MyButton";
import UsingHooks from "./UsingHooks";
import { ShowHideTimer } from "./Timer";

const MainSection = () => {
  const [timer, setTimer] = useState(true);

  return (
    <section>
      <h2>Hooks Example</h2>
      <UsingHooks />
      <h2>Timer Section</h2>

      <button
        onClick={() => {
          setTimer(!timer);
        }}
      >
        {timer ? "Hide Timer" : "Show Timer"}
      </button>
      <ShowHideTimer show={timer} />
    </section>
  );
};

export default MainSection;
