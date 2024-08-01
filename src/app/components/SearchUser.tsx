import Image from "next/image";
import searchIcon from "../../../public/images/search.png";
import closeIcon from "../../../public/images/close.png";
import { Suspense, useState } from "react";
import Loading from "../loading";
import UserCard from "./UserCard";

type SearchUser = {
  onClose: () => void;
};

export default function SearchUser({ onClose }: SearchUser) {
  const [searchUser, setSearchUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section
      onClick={handleOverlayClick}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black-54"
    >
      <section
        onClick={handleContentClick}
        className="w-full max-w-sm lg:max-w-md mx-auto mt-20 "
      >
        <div className="bg-white rounded h-14 overflow-hidden relative">
          <Image
            src={searchIcon}
            alt="검색"
            width={25}
            height={25}
            className="absolute left-3 top-4"
          />

          <input
            type="text"
            placeholder="이름 또는 이메일로 사용자 검색하기"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none py-1 h-full px-12"
          />
        </div>
        {/* display search user */}
        <div className="bg-white mt-2 w-full p-4 rounded">
          {searchUser.length === 0 && !loading && (
            <p className="text-center text-dark-gray">
              찾는 사용자가 없습니다!
            </p>
          )}
          {loading && <Loading />}
          {/* {loading && <Suspense fallback={<Loading />}></Suspense>} */}
          {setSearchUser.length !== 0 &&
            !loading &&
            searchUser.map(
              (user, i) => <></>
              // return <UserCard key={i} user={user} />;
            )}
        </div>
      </section>
    </section>
  );
}
