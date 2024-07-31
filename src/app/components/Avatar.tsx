type Avatar = {
  image?: string | null;
  title?: string | null;
};

export default function Avatar({ image, title }: Avatar) {
  return (
    <>
      <img
        alt="사용자 프로필"
        title={title ?? undefined}
        src={image ?? undefined}
        referrerPolicy="no-referrer"
        className="rounded-full w-7 h-7"
      />
    </>
  );
}
