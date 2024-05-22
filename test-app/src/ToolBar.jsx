import React from "react";

export default function ToolBar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  return (
    <div>
      {isLoggedIn && <span>환영합니다.</span>}
      {isLoggedIn ? (
        <button onCLick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그아웃</button>
      )}
    </div>
  );
}
