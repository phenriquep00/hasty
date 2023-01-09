interface ILittleLegend {
  image: string;
  text: string;
  onClick: () => void;
}

export function LittleLegend({ image, text, onClick }: ILittleLegend) {
  return (
    <button onClick={onClick} className="flex flex-col items-center border-2 rounded">
      <img
        className="animate-littleLegends hover:scale-125 z-20 transition-transform ease-in-out duration-200"
        src={image}
        alt="little legend"
      />

      <p className="text-xl -mb-5 bg-white rounded text-black p-2 px-4 capitalize font-semibold">{text}</p>
      
    </button>
  );
}
