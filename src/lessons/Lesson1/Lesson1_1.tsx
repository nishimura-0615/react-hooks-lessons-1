import { ChangeEvent, useState } from "react";



const Lesson1_1 = () => {
  const [ age, setAge ] = useState<number>(0);
  const [ name, setName ] = useState("ShinCode");
  console.log("rendering!")
  const handleClick = () => {
    // setage(age + 1)の処理の時は初期値に対して処理しているので複数記述しても下記のように初期値が０なら1となる
    // setAge((state)=> state + 1 )の場合は更新用関数の効果で更新した値を受け取って処理をする働きがある
    // setAge((prevAge)=> prevAge + 1 );の場合は最初は初期値0が更新されて2が値として渡る。
    // その後再実行（レンダリング)されてボタンを押すと2+1で３が渡る。prevageが3を保持してその後レンダリングすると3ずつ増える.
    //  setAge((state)=> state + 1 );
    //  setAge((state)=> state + 1 );
    //  setAge((state)=> state + 1 );
    // setage(age + 1)
    // setage(age + 1)
    // setage(age + 1)
    setAge((prevAge)=> prevAge + 1 );
    setAge((prevAge)=> prevAge + 1 );
    setAge((prevAge)=> prevAge + 1 );

    console.log(e);

    console.log("clicked");

    console.log(name);
  };
  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      {/* onClickは関数を受け取ることができる  onClick={() => handleclickと書き換え可能*/ }
      <button
        onClick={handleClick}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>You are { age }</p>
    </div>
  );
};

export default Lesson1_1;
