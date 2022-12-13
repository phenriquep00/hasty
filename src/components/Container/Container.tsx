import { LittleLegend } from "../LittleLegend/LittleLegend";

export function Container () {
    return (
        <main className="flex flex-1 w-full items-center justify-center">
            <LittleLegend image="public/Featherknight_Spirit_Blossom_Kami_Tier_1.png"/>
            <LittleLegend image="public/Featherknight_Pengu_Tier_2.png"/>
            <LittleLegend image="public/Featherknight_Spirit_Blossom_Yokai_Tier_2.png"/>
            <LittleLegend image="public/Featherknight_Terra_Inktales_Tier_2.png"/>
        </main>
    );
};