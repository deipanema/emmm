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

const menu = [
  {
    href: "/chat",
    icon: <ChatIcon />,
    clickedIcon: <ChatFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <section className="w-24 h-full flex flex-col justify-between items-center pb-10 pt-3">
        <BrandIcon />
        <ul className="">
          {menu.map((icon) => (
            <Link key={icon.href} href={icon.href}>
              <li className="p-4 rounded-lg transition-all hover:bg-light-gray cursor-pointer">
                {pathName === icon.href ? icon.clickedIcon : icon.icon}
              </li>
            </Link>
          ))}
        </ul>
        <div className="space-y-3">
          {session && <Avatar image={user?.image} title={user?.name} />}
          <LogoutIcon />
        </div>
      </section>
    </>
  );
}
