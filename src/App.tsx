import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {


  return (
    <div className="flex flex-1 items-center justify-between text-white gap-2 flex-col h-screen">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
