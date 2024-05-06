import { useMemo,useState } from "react";

//incrementcount1を押すと1上がる,
//incrementcount2を押すと左右に値があり、左の値が1カウントアップされる。右の値は、左の値を2倍にする。
const Lesson5_3 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count: number) => {
    let i = 0;
    while (i < 100000000) i++;
    return count * 2;
  };
  //子コンポーネントで再生成の処理をする際にuseMemoを使う
  const doubleCount = useMemo(()=>double(count2),[count2]);

  return (
    <div>
      <p>Counter: {count1}</p>
      <button
        onClick={() => setCount1(count1 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Increment count1
      </button>

      <p>
        Counter: {count2}, {doubleCount}
      </p>
      <button
        onClick={() => setCount2(count2 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Increment count2
      </button>
    </div>
  );
};

export default Lesson5_3;
