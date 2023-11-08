import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Pokemones from "./pages/Pokemones";
import "./assets/App.css"


export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </>
  );
}
