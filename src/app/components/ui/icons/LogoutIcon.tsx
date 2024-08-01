import Image from "next/image";
import logoutIcon from "../../../../../public/images/sign-out.png";
import { signOut } from "next-auth/react";

export default function LogoutIcon() {
  return (
    <Image
      src={logoutIcon}
      alt="로그아웃"
      title="로그아웃"
      width={30}
      height={30}
      onClick={() =>
        signOut({ redirect: true, callbackUrl: "/api/auth/signin" })
      }
      className="cursor-pointer"
    />
  );
}
