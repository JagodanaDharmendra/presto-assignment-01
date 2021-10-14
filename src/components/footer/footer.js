import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import { SiTwitter } from "react-icons/si";

const socialIcons = [
  {
    icon: FaFacebookSquare,
    url: "https://www.facebook.com",
  },
  {
    icon: SiTwitter,
    url: "https://www.twitter.com",
  },
  {
    icon: FaInstagramSquare,
    url: "https://www.instagram.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-auto justify-between bg-gray-400 px-8 py-2">
      <div className="flex flex-row space-x-4">
        {socialIcons?.map((current) => (
          <SocialIcons IconType={current.icon} href={current.url} />
        ))}
      </div>

      <div className="text-white font-thin">
        © 2021 iflix Media. All rights reserved.
      </div>
    </footer>
  );
}

function SocialIcons({ IconType, href }) {
  return (
    <a href={href} target="_blank">
      <IconType size={24} color="fff"></IconType>
    </a>
  );
}
