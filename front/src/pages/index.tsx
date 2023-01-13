import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <>
      <div>main</div>
    </>
  );
};

export default Home;
