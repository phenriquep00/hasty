import { PlayerCard } from "../PlayerCard/PlayerCard";
import { motion } from "framer-motion";
import { players } from "./players";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer/Footer";

export function PlayersCarrousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<any>();

  useEffect(() => {
    console.log(
      carouselRef.current.scrollWidth,
      carouselRef.current.offsetWidth
    );
    setWidth(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth / 2
    );
  }, []);

  return (
    <div className="flex flex-col justify-around items-center gap-8 bg-opacity-70 w-11/12 overflow-hidden">
      <h1 className="text-3xl font-bold text-brand">
        Conheça nossos jogadores
      </h1>
      <motion.div
        whileTap={{ cursor: "grabbing" }}
        ref={carouselRef}
        className="cursor-grab overflow-hidden md:pl-[100%] pl-[400%]"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-28"
        >
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              name={player.name}
              description={player.description}
              social={player.social}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
