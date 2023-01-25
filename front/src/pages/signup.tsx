import axios from "axios";

const signup = () => {
  const userSign = () => {};

  return (
    <form>
      <label>이메일 </label>
      <input type="text" />
      <label>닉네임 </label>
      <input type="text" />
      <label>크리에이터 신청 </label>
      <input type="checkbox" name="creator" />
      <button>회원가입 완료</button>
    </form>
  );
};

export default signup;
