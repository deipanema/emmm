import Image from "next/image";
import brandIcon from "../../../../../public/images/brand.png";

export default function BrandIcon() {
  return (
    <Image src={brandIcon} alt="EMMM" title="EMMM" width={40} height={40} />
  );
}
