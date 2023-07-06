import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/modules/boardSlice";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const location = useLocation();

  const writerId = location.state.userId;

  const handleWriteButtonClick = () => {
    // (1) dispatch
    dispatch(
      addPost({
        title,
        contents,
        writerId,
      })
    );

    // (2) navigate
    navigate("/");
  };

  return (
    <div>
      <h4>글 작성 페이지입니다.</h4>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="글 제목을 입력해주세요."
      />
      <br />
      <input
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        placeholder="글 내용을 입력해주세요."
      />
      <br />
      <button onClick={handleWriteButtonClick}>글 작성</button>
    </div>
  );
};

export default Write;
