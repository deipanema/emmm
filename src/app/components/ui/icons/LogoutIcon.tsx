import Image from "next/image";
import logoutIcon from "../../../../../public/images/sign-out.png";

export default function LogoutIcon() {
  return (
    <Image
      src={logoutIcon}
      alt="로그아웃"
      title="로그아웃"
      width={30}
      height={30}
    />
  );
}
