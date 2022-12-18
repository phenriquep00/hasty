interface ILittleLegend {
  image: string;
  text: string;
  onClick: () => void;
}

export function LittleLegend({ image, text, onClick }: ILittleLegend) {
  return (
    <button onClick={onClick} className="flex flex-col items-center">
      <img
        className="animate-littleLegends hover:scale-125 z-20 transition-transform ease-in-out duration-200"
        src={image}
        alt="little legend"
      />

      <p className="text-2xl capitalize font-semibold underline underline-offset-2">{text}</p>
      
    </button>
  );
}
