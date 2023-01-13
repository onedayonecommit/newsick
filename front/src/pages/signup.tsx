import Styled from "styled-components";

const SignUp = () => {
  return (
    <>
      <Test>닉네임</Test>
      <input type="text" />
      <label>이메일</label>
      <input type="text" />
      <button>회원가입</button>
    </>
  );
};

const Test = Styled.label`
  font-family: "SCoreDream";
  color : "black";
`;

export default SignUp;
