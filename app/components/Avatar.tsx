import Image from "next/image";
import AvatarPlaceholder from "@/public/images/avatar-placeholder-2.jpg";

const Avatar = () => {
  return (
    <Image
      className="rounded-full border-2 dark:border-verde-800 dark:hover:border-verde-500"
      height={35}
      width={35}
      alt="Avatar"
      src={AvatarPlaceholder}
    ></Image>
  );
};

export default Avatar;
