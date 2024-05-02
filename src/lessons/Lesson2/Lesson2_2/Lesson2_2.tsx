import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("ShinCode");
  const [ bio, setBio ] = useState<string | null>(null);
  const [ count, setCount] = useState(0);
  //react外のAPIのリクエストなどでuseEffectを使う
  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
    };
    startFetching();

    return () =>{

    };

  },[person,count]);


  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
      <p>{count}</p>
    </div>
  );
};

// export default Lesson2_2;
// import { useEffect, useState } from "react";
// import { fetchBio } from "./fetchBio";

// const Lesson2_2 = () => {
//   const [person, setPerson] = useState<string>("ShinCode");
//   const [ bio, setBio ] = useState<string | null>(null);
//   const [ count, setCount] = useState(0);
//   //react外のAPIのリクエストなどでuseEffectを使う
//   useEffect(() => {
//     // let ignore = false;
//     const startFetching = async () => {
//       // const response = await fetchBio(person);
//       // // console.log(response);
//       // //   if(!ignore){
//       // //     setBio(response);
//       // //   }
//     }
//     startFetching();
//     // countが変化すると
//     //userを切り替えると1カウントアップする
//     setCount(count + 1 );
//     //連続でuserを切り替えると挙動がおかしくなりやすいので
//     //未然にエラーしないためのクリーンアップ関数を定義する
//     // return () => {
//     // };

//   },[person]);


//   return (
//     <div>
//       <select onChange={(e) => setPerson(e.target.value)} value={person}>
//         <option value="ShinCode">ShinCode</option>
//         <option value="TestUser">TestUser</option>
//         <option value="SampleUser">SampleUser</option>
//       </select>

//       <hr />

//       <p className="text-black">{bio ?? "Loading..."}</p>
//       <p>{count}</p>
//     </div>
//   );
// };

// export default Lesson2_2;
