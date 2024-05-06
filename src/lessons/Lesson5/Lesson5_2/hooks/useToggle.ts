import { useCallback, useState } from "react";

//親コンポーネントが再レンダリングされる
// 関数が再生成されないのがメモ化の良さの一つ
// カスタムhooksをメモ化する理由は関数の再生成による余分な再レンダリングを防ぐため
// 実装によってはメモ化できているならusecallbackは記載を消しても良い。
export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  },[]);

  return [state, toggle];
};
