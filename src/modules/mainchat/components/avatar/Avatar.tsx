import Image from "next/image";
import { FC } from "react";
import "./style.css";

interface AvatarProps {
  user: "bot" | "user";
}

const Avatar: FC<AvatarProps> = ({ user }) => {
  const isActive = true;

  return (
    <div className="avatar-container">
      <div
        className={`avatar-image ${
          user === "bot" ? "" : "avatar-image-md"
        }`}
      >
        <Image
          fill
          src={user === "bot" ? "/images/bot.webp" : "/images/placeholder.jpg"}
          alt="Avatar"
        />
      </div>
      {isActive && (
        <span
          className={`active-indicator ${
            user === "bot" ? "" : "active-indicator-md"
          }`}
        />
      )}
    </div>
  );
};

export default Avatar;