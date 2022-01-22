import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

/* memoでアロー関数部分を囲むことによってpropsが変わらないと再レンダリングしないということを宣言できる*/

export const ChildArea = memo((props) => {
  console.log(style);
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()];
  // console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>小コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
