import { Container } from "../../components/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export function Home() {
  return (
    <div>
      <div className="flex flex-1 items-center justify-between text-white gap-2 flex-col h-screen overflow-hidden">
        <Header />
        <Container />
        <Footer />
      </div>
    </div>
  );
}
