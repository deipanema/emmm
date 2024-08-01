"use client";

import Link from "next/link";
import BrandIcon from "./ui/icons/BrandIcon";
import ChatFillIcon from "./ui/icons/ChatFillIcon";
import ChatIcon from "./ui/icons/ChatIcon";
import LogoutIcon from "./ui/icons/LogoutIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import { useSession } from "next-auth/react";
import { useState } from "react";
import explore from "../../../public/images/explore.jpg";
import Image from "next/image";
import SearchUser from "./SearchUser";

export default function Sidebar() {
  const [users, setUsers] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  const basePath = pathName === "/chat";

  return (
    <nav
      className={`w-full h-full grid grid-cols-[96px_1fr] bg-background ${
        !basePath && "hidden"
      }`}
    >
      <section className="h-full flex flex-col justify-between items-center pb-10 pt-3">
        <BrandIcon />
        <ul className="">
          <li className="p-4 rounded-lg transition-all hover:bg-light-gray cursor-pointer">
            <Link href="/chat">
              {pathName.includes("/chat") ? <ChatFillIcon /> : <ChatIcon />}
            </Link>
          </li>
          <li
            onClick={() => setOpenSearch(true)}
            className="p-4 rounded-lg transition-all hover:bg-light-gray cursor-pointer"
          >
            <button className="w-full h-full">
              <SearchIcon />
            </button>
          </li>
        </ul>
        <div className="space-y-3">
          {session && <Avatar image={user?.image} title={user?.name} />}
          <LogoutIcon />
        </div>
      </section>
      <section className="w-full">
        <div className="h-16 flex items-center">
          <h1 className="text-xl font-bold p-4 text-black">채팅</h1>
        </div>
        <div className="h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scrollbar bg-white rounded-3xl">
          {users.length === 0 && (
            <div className="mt-12 flex flex-col items-center">
              <Image src={explore} alt="" width={180} height={330} />
              <p className="text-sm text-center text-dark-gray font-semibold">
                이야기 나눌 상대를 찾아보세요!
              </p>
            </div>
          )}
        </div>
      </section>
      {/* search user */}
      {openSearch && <SearchUser onClose={() => setOpenSearch(false)} />}
    </nav>
  );
}
