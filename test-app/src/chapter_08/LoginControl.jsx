import { useState } from "react";
import Greeting from "./Greeting";
import MyButton from "./MyButton";
export default function LoginControl(props) {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLogedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLogedIn(false);
  };

  let button;
  if (isLogedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }
  return (
    <div>
      <Greeting isLogedIn={isLogedIn} />
      {button}
    </div>
  );
}

function LoginButton(props) {
  return <button onClick={props.onClick}>로그인</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>로그아웃</button>;
}
