"use client"
import { useFormState } from "react-dom";
import { formAction } from "./actions";
import  IncrementButton  from "./IncrementButton";

// ServerActionsはフォームタグにFormAcionをつけるとできる
// ServerActionsはサーバー側で実行されることがほとんどなのでターミナルに結果が返る。
// JavaScirptを構築せずにリクエストを記載してリクエストを送れる
// useFormStatus サーバー上にユーザ情報を送ったりしているときの保留時間を取得できるhooks
// ServerActionはサーバーコンポーネントの場合はファイルを分けて"use server"の宣言が必要
// useFormStatusはレンダーされたformの値を返さない
// useFormStateとuseStateの違い
// サーバーアクションとuseFormStateをimportや関数を定義すれば使える
// JavaScriptを構築しなくて済む。ネットワークが整っていない環境にとって好都合な仕様
// useStateはusefetchでリクエストを記載したりと色々と手間になる
// プログレッシブエンハンスメント:核となるコンテンツを少しずつユーザーにみえる様にする考え

export default function Home() {
  const [state, FormDispatch ] = useFormState(formAction, 0);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={FormDispatch}>
        <IncrementButton />
      </form>

      <span>count: {state}</span>
    </main>
  );
}
