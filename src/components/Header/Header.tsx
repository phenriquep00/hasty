export function Header() {
  return (
    <header className="flex w-full bg-gradient-to-b from-black to-transparent h-[10%] text-4xl font-black z-10">
      <div className="flex w-full items-center justify-center gap-10 animate-header mt-8">
        <img src="/Kombi_2.png" className="md:w-40 w-28" alt="" />
        <h1 className="font-black md:text-[80px] bg-gradient-to-r from-[#A970FF] via-violet-400 to-pink-300 bg-clip-text text-transparent leading-loose">
        Kombi gaming
      </h1>
      </div>
    </header>
  );
}
