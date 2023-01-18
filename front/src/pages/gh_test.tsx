import axios from "axios";
import Styled from "styled-components";

const GhTest = () => {
  const imageTest = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const imgData = (e.target as HTMLInputElement).files[0];
      console.log(imgData);

      const formData = new FormData();
      formData.append("images", imgData);
      formData.append("key", "sdjfkflfl");
      await axios({
        method: "post",

        url: "http://192.168.0.188:3000/test/hi",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  return (
    <>
      <Test>이미지</Test>
      <input type="file" multiple accept="image/jpeg,image/jpg" onChange={imageTest} />
      {/* <button>전송</button> */}
    </>
  );
};

const Test = Styled.label`
  font-family: "SCoreDream";
  color : "black";
`;

export default GhTest;
