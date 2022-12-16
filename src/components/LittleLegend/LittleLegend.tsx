interface ILittleLegend {
    image: string;
}

export function LittleLegend({image}: ILittleLegend) {
    return (
        <button className="hover:scale-125 z-20 transition-transform ease-in-out duration-200">
            <img className="animate-littleLegends" src={image} alt="little legend" />
        </button>
    )
}