import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");
  // 入力フォーム用のstate
  const [text, setText] = useState("");
  // 小コンポーネント表示切替用のstate
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = () => setOpen(!open);
  // アロー関数で書いた関数というのは再レンダリングごとに新しい関数を生成しているとみなされる
  // そのため、ChildAreaコンポーネントに渡すpropsが毎回変わっているとみなされてしまう
  // よってpropsが変わったChildAreaコンポーネントも再描画されてしまう
  // したがってsetOpenが生成された場合のみonClickCloseを再生成する、すなわち初回レンダリングの時にのみ第一引数のアロー関数を生成するようにすれば
  // ChildAreaコンポーネントに渡すpropsも変わらず、不要な再レンダリングを防げる
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  // 変数のmemo化,第二引数が空配列なので最初読み込んだ時にのみ第一引数のアロー関数が実行される
  // 第二引数に変数が指定された場合はその変数が変わった場合のみ第一引数のアロー関数が実行される
  const temp = useMemo(() => 1+3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
