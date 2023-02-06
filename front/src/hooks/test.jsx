const a = () => {
  (() => {
    console.log("a");
  })();
};

const b = () => {
  const c = () => {
    console.log("a");
  };
  c();
};
