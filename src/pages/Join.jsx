import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../redux/modules/userSlice";

const Join = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confPw, setConfPw] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Join 페이지입니다.</h4>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력해주세요."
      />
      <input
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
      />
      <input
        value={confPw}
        onChange={(e) => setConfPw(e.target.value)}
        placeholder="확인비밀번호를 입력해주세요."
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="고객명을 입력해주세요."
      />
      <button
        onClick={() => {
          if (pw !== confPw) {
            alert("비밀번호가 다릅니다. 확인해주세요!");
            return false;
          }

          dispatch(
            join({
              email,
              pw,
              name,
            })
          );

          alert("회원가입 완료!");
          navigate("/");
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default Join;
