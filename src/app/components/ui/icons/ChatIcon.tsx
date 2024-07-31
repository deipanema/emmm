import Image from "next/image";
import chatIcon from "../../../../../public/images/chat-line.png";

export default function ChatIcon() {
  return (
    <Image src={chatIcon} alt="채팅" title="채팅" width={30} height={30} />
  );
}
