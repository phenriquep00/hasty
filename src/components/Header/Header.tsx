export function Header() {
  return (
    <header className="flex w-full gap-10 items-center justify-center mt-4 h-[10%] text-4xl font-black z-10 animate-header">
      <img
        src="/Kombi_2.png"
        className="w-40"
        alt=""
      />
      <h1 className="font-black text-[80px] bg-gradient-to-r from-[#A970FF] via-violet-400 to-pink-300 bg-clip-text text-transparent leading-loose">Kombi gaming</h1>
    </header>
  );
}
