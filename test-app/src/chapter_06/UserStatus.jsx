import { useState, useEffect } from "react";
import useUserStatus from "./UseUserStatus";

export default function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  if (isOnline === null) {
    return "대기중...";
  }
  return isOnline ? "온라인" : "오프라인";
}
