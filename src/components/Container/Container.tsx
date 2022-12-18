import { LittleLegend } from "../LittleLegend/LittleLegend";

export function Container() {
  return (
    <main className="flex flex-1 w-full items-end justify-center overflow-hidden">
      <div className="mb-10">
        <LittleLegend
          onClick={() => {
            window.location.assign("/sobre");
          }}
          text={"sobre"}
          image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Spirit_Blossom_Kami_Tier_1.png"
        />
      </div>

      <LittleLegend
        onClick={() => {
          window.location.assign("/players");
        }}
        text={"projetos"}
        image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Pengu_Tier_2.png"
      />
      <LittleLegend
        onClick={() => {
          window.location.assign("/doacoes");
        }}
        text={"doações"}
        image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Spirit_Blossom_Yokai_Tier_2.png"
      />
      <div className="mb-10">
        <LittleLegend
          onClick={() => {
            window.location.assign("/redes-sociais");
          }}
          text={"redes sociais"}
          image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Terra_Inktales_Tier_2.png"
        />
      </div>
    </main>
  );
}
