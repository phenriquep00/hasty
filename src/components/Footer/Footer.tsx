import {
  DiscordLogo,
  InstagramLogo,
  TwitchLogo,
  YoutubeLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex w-full items-end justify-around mb-4 h-[15%]">
      <a href="https://www.twitch.tv/sukesvs" target={"_blank"} className="flex justify-center gap-2 text-[#5e5c64] hover:text-white transition-colors duration-200 ease-in-out">
        <TwitchLogo size={20} />
        twitch
      </a >

      <a href="" className="flex justify-center gap-2 text-[#5e5c64] hover:text-white transition-colors duration-200 ease-in-out">
        <InstagramLogo size={20} />
        instagram
      </a >

      <a href="" className="flex justify-center gap-2 text-[#5e5c64] hover:text-white transition-colors duration-200 ease-in-out">
        <YoutubeLogo size={20} />
        youtube
      </a >

      <a href="https://discord.gg/gyWQwWjnhV" target="_blank" className="flex justify-center gap-2 text-[#5e5c64] hover:text-white transition-colors duration-200 ease-in-out">    
        <DiscordLogo size={20} />
        discord
      </a >
    </footer>
  );
}
