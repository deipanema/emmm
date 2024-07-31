import Image from "next/image";
import searchIcon from "../../../../../public/images/search-line.png";

export default function SearchIcon() {
  return (
    <Image src={searchIcon} alt="검색" title="검색" width={30} height={30} />
  );
}
