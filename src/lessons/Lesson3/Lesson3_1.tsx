import { useRef, useState } from "react";

const Lesson3_1 = () => {
  const [ input, setInput ] = useState("");
  //ref.currentは値を保持し続ける


  const ref = useRef(0);
  console.log(ref.current);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked" + ref.current);
  }

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Click me!</button>
      <p></p>
    </div>
  );
};

export default Lesson3_1;
