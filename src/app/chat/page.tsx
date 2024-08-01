"use client";

import { usePathname } from "next/navigation";

export default function Chatpage() {
  const pathName = usePathname();
  const basePath = pathName === "/chat";

  return (
    <section className={`${basePath ? "hidden" : ""} bg-white`}>
      <h1>Chat Page</h1>
      {/* 기타 내용 */}
    </section>
  );
}
