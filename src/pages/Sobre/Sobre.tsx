import { PlayersCarrousel } from "../../components/PlayersCarrousel/PlayersCarrousel";
import { TeamAbout } from "../../components/TeamAbout/TeamAbout";

export function Sobre() {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center gap-4 py-4 overflow-y-scroll">
            <TeamAbout />
            <PlayersCarrousel />    
        </div>
    )
}