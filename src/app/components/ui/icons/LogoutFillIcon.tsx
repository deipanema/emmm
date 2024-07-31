import Image from "next/image";
import logoutFillIcon from "../../../../../public/images/sign-out-fill.png";

export default function LogoutFillIcon() {
  return (
    <Image
      src={logoutFillIcon}
      alt="로그아웃"
      title="로그아웃"
      width={30}
      height={30}
    />
  );
}
