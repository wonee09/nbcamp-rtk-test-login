import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/modules/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [pw, setPw] = useState();

  return (
    <div>
      <h1>Login 페이지입니다.</h1>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="이메일를 입력해주세요."
      />
      <input
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
        placeholder="비밀번호를 입력해주세요."
      />

      <button
        onClick={() => {
          // (1) 로그인 완료

          alert(email);
          alert(pw);

          dispatch(
            login({
              email: email,
              pw: pw,
            })
          );

          // (2) 페이지 이동
          navigate("/");
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
