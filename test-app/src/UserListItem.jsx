import useUserStatus from "./UseUserStatus";

export default function UserStatus(props) {
  const isOnline = useUserStatus(props.user.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.user.name}</li>
  );
}
