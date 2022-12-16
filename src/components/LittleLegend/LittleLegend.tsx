interface ILittleLegend {
  image: string;
  text: string;
}

export function LittleLegend({ image, text }: ILittleLegend) {
  return (
    <button className="flex flex-col items-center">
      <img
        className="animate-littleLegends hover:scale-125 z-20 transition-transform ease-in-out duration-200"
        src={image}
        alt="little legend"
      />

      <p className="text-2xl capitalize font-semibold underline underline-offset-2">{text}</p>
      
    </button>
  );
}
