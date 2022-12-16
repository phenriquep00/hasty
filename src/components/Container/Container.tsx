import { LittleLegend } from "../LittleLegend/LittleLegend";


export function Container() {
  return (
    <main className="flex flex-1 w-full items-end justify-center">
      <div className="mb-10"> 
        <LittleLegend
          text={"sobre"}
          image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Spirit_Blossom_Kami_Tier_1.png"
        />
      </div>

      <LittleLegend
        text={"projetos"}
        image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Pengu_Tier_2.png"
      />
      <LittleLegend
        text={"suporte"}
        image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Spirit_Blossom_Yokai_Tier_2.png"
      />
      <div className="mb-10"> 
      <LittleLegend
        text={"alguma coisa"}
        image="https://raw.githubusercontent.com/phenriquep00/hasty/main/public/Featherknight_Terra_Inktales_Tier_2.png"
      />
      </div>

    </main>
  );
}
