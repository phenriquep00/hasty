import {
  DiscordLogo,
  InstagramLogo,
  TwitchLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex w-full items-end justify-around mb-4 h-[10%]">
      <a
        href="https://www.twitch.tv/sukesvs"
        target={"_blank"}
        className="flex border-[1px] rounded border-[#5e5c64]  px-4 py-2 justify-center gap-2 text-[#5e5c64] hover:text-white hover:border-white transition-colors duration-200 ease-in-out"
      >
        <TwitchLogo size={20} />
        twitch
      </a>

      <a
        href="https://www.instagram.com/kombi_gaming/"
        target="_blank"
        className="flex border-[1px] rounded border-[#5e5c64]  px-4 py-2 justify-center gap-2 text-[#5e5c64] hover:text-white hover:border-white transition-colors duration-200 ease-in-out"
      >
        <InstagramLogo size={20} />
        instagram
      </a>

      <a
        href=""
        className="flex border-[1px] rounded border-[#5e5c64]  px-4 py-2 justify-center gap-2 text-[#5e5c64] hover:text-white hover:border-white transition-colors duration-200 ease-in-out"
      >
        <YoutubeLogo size={20} />
        youtube
      </a>

      <a
        href="https://discord.gg/gyWQwWjnhV"
        target="_blank"
        className="flex border-[1px] rounded border-[#5e5c64]  px-4 py-2 justify-center gap-2 text-[#5e5c64] hover:text-white hover:border-white transition-colors duration-200 ease-in-out"
      >
        <DiscordLogo size={20} />
        discord
      </a>

      <a
        href="https://twitter.com/kombi_gaming/"
        target="_blank"
        className="flex border-[1px] rounded border-[#5e5c64]  px-4 py-2 justify-center gap-2 text-[#5e5c64] hover:text-white hover:border-white transition-colors duration-200 ease-in-out"
      >
        <TwitterLogo size={20} />
        twitter
      </a>
    </footer>
  );
}
