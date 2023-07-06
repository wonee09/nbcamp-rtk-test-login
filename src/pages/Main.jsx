import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/modules/userSlice";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boardList = useSelector(function (state) {
    return state.boardSlice;
  });

  const userList = useSelector(function (state) {
    return state.userSlice;
  });

  console.log("userList", userList);

  const loginUser = userList.find((user) => user.isLogin === true);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button onClick={() => navigate("login")}>로그인</button>
          <button onClick={() => navigate("join")}>회원가입</button>
          <button
            onClick={() => {
              if (loginUser) {
                navigate("/write", {
                  state: { userId: loginUser.id },
                });
              } else {
                alert("로그인이 필요합니다.");
                return false;
              }
            }}
          >
            글 작성
          </button>
        </div>
        {loginUser && (
          <div>
            {loginUser.userName}님 반갑습니다!!
            <button
              onClick={() => {
                const isConfirmed = confirm("진짜 로그아웃????");
                if (isConfirmed) {
                  dispatch(logout(loginUser.id));
                }
              }}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
      <div>
        {boardList
          .filter((board) => board.isDeleted === false)
          .map((board) => {
            return (
              <div
                style={{
                  backgroundColor: "#bfd8ff",
                  padding: "5px",
                  margin: "5px",
                  border: "1px solid black",
                }}
                key={board.id}
              >
                <h4>{board.title}</h4>
                <h4>{board.contents}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
