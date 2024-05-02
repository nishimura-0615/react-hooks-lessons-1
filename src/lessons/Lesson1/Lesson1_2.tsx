import { useState, ChangeEvent } from "react";

const Lesson1_2 = () => {

  // formを直接編集することはできない。あくまで値を読み取るもの
  const [form, setForm] = useState({
    firstName: "Code",
    lastName: "Shin",
    email: "shincode@gmail.com",
  });

  // form.firstname = "Test Updated"; 直接的に値を書き換えるのはJS(react)の作法的にしては行けない
  // mutable（書き換え可能),imutable,(書き換え不可) 不変性を大事にする

  //何度も要素を書くのは冗長なのでスプレッド構文を使う
  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
             />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
           />
        </label>
        <label>
          Email:
          <input type="text" className="border border-slate-500"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
           />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
