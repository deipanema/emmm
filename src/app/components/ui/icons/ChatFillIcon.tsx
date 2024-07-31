import Image from "next/image";
import chatFillIcon from "../../../../../public/images/chat-fill.png";

export default function ChatFillIcon() {
  return (
    <Image src={chatFillIcon} alt="채팅" title="채팅" width={30} height={30} />
  );
}
