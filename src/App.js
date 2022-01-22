import { useState } from "react";
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

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
