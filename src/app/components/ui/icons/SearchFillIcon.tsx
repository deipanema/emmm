import Image from "next/image";
import searchFillIcon from "../../../../../public/images/search-fill.png";

export default function SearchFillIcon() {
  return (
    <Image
      src={searchFillIcon}
      alt="검색"
      title="검색"
      width={30}
      height={30}
    />
  );
}
