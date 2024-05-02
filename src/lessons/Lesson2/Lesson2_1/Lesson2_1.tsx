import { useEffect, useState } from "react";

const Lesson2_1 = () => {
  //エフェクト(外部のシステムが変化する:Twitterのタイムライン更新)、
  // イベント（handleclick,count)
  const [ position, setPosition ] = useState({ x:0, y:0 });

  //useEffect:react外の何らかの作用を適用させる。reactのAPIなどに使われる
  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };

  },[]);

  //windowオブジェクト
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;
