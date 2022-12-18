import { BrowserRouter } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";

function App() {


  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
