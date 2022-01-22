const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  console.log(style);
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>小コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
