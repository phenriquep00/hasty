interface ILittleLegend {
  image: string;
  text: string;
  onClick: () => void;
}

export function LittleLegend({ image, text, onClick }: ILittleLegend) {
  return (
    <button onClick={onClick} className="flex flex-col group items-center border-2 border-[#A970FF] hover:bg-[#A970FF] rounded transition-colors duration-300 ease-in-out">
      <img
        className="animate-littleLegends hover:scale-125 z-20 transition-transform ease-in-out duration-200"
        src={image}
        alt="little legend"
      />

      <p className="text-xl -mb-5 bg-[#A970FF] rounded text-white group-hover:bg-[#A030f0] p-2 px-4 capitalize font-semibold transition-colors duration-300 ease-in-out">{text}</p>
      
    </button>
  );
}
