import { motion } from "framer-motion";
import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";

interface IPlayerCard {
  name: string;
  description: string;
  social: string[];
}

export function PlayerCard({ name, description, social }: IPlayerCard) {
  return (
    <motion.div className="flex min-w-[200px] min-h-[200px] ">
      <div>
        <img
          className="w-48 fixed -ml-32"
          draggable="false"
          src="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Pengu_Tier_2.png"
          alt=""
        />
      </div>

      <div className="flex flex-col p-4 gap-5 bg-brand rounded-xl">
        <h1 className="bg-black bg-opacity-30 font-black text-white rounded p-2">
          {name}
        </h1>

        <p className="bg-black bg-opacity-40 text-white font-semibold rounded p-2">
          {description}
        </p>

        <ul className="flex gap-4 bg-black bg-opacity-50 rounded p-2 text-white">
          <li>
            <a href={social[0]} target="_blank">
              <TwitterLogo />
            </a>
          </li>
          <li>
            <a href={social[1]} target="_blank">
              <InstagramLogo />
            </a>
          </li>
          <li>
            <a href={social[2]} target="_blank">
              <FacebookLogo />
            </a>
          </li>
          <li>
            <a href={social[3]} target="_blank">
              <DiscordLogo />
            </a>
          </li>
          <li>
            <a href={social[4]} target="_blank">
              <WhatsappLogo />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
