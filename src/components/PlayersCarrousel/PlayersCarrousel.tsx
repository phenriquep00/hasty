import { PlayerCard } from "../PlayerCard/PlayerCard";

export function PlayersCarrousel() {
    return(
        <div className="flex flex-col justify-around items-center bg-opacity-70 w-11/12">
            <h1 className="text-3xl font-bold text-brand">
                Conheça nossos jogadores
            </h1>
            <p>
                <PlayerCard />
            </p>
        </div>
    )
}