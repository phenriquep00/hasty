interface ILittleLegend {
    image: string;
}

export function LittleLegend({image}: ILittleLegend) {
    return (
        <div>
            <img className="animate-bounce" src={image} alt="little legend" />
        </div>
    )
}