import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Pokemones() {
  const [list, setList] = useState([]);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const data = await response.json();
      setList(data.results);
    } catch (error) {
      console.error("Error de la API:", error);
      Swal.fire({
        title: "¡Error!",
        text: "La API no está disponible en este momento, por favor inténtalo más tarde",
        icon: "error",
        confirmButtonText: "Volver al Inicio",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleClick = () => {
    if (select) {
      navigate(`/pokemones/${select}`);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h2>Selecciona un Pokémon</h2>
      <select name="" id="" className="m-3" onChange={handleSelect} defaultValue="">
        <option value="" hidden>
          Seleccione un Pokémon...
        </option>
        {list.map((item) => (
          <option key={item.name} value={item.name}>
            {list.indexOf(item) + 1} -{" "}
            {item.name[0].toUpperCase() + item.name.substr(1)}
          </option>
        ))}
      </select>
      <Link to={`/pokemones/${select}`} className="btn btn-dark text-white text-decoration-none" onClick={handleClick}>
        Ver Detalles
      </Link>
    </div>
  );
}