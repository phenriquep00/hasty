import { BrowserRouter, HashRouter } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";

function App() {


  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
