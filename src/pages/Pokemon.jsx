import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Pokemon() {
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  const params = useParams();

  const getData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Debe seleccionar un Pokémon",
        icon: "error",
        confirmButtonText: "Volver al Home",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=" d-flex justify-content-center p-3">
        <div className="card justify-content-around d-flex">
          <div className=" w-100 d-flex">
            <div>
              <img
                src={
                  result
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png`
                    : "../whoisthispkmn.PNG"
                }
                className="card-img-top"
                alt="..."
              />
             
            </div>
            <div className="w-100">
              <ul className="list-group list-group-flush p-4">
                <li className="list-group-item">
                <h3 className="card-title">
                {result.name ? (
                    result.name[0].toUpperCase() + result.name.substring(1)
                  ) : (
                    <p>Loading</p>
                  )}
                </h3>
                </li>
                {result.stats ? (
                  <>
                    <li className="list-group-item">
                      HP: {result.stats[0].base_stat}
                    </li>
                    <li className="list-group-item">
                      Ataque: {result.stats[1].base_stat}
                    </li>
                    <li className="list-group-item">
                      Defensa: {result.stats[2].base_stat}
                    </li>
                    <li className="list-group-item">
                      Ataque Especial: {result.stats[3].base_stat}
                    </li>
                    <li className="list-group-item">
                      Def. Especial: {result.stats[4].base_stat}
                    </li>
                    <li className="list-group-item">
                      Velocidad: {result.stats[5].base_stat}
                    </li>
                  </>
                ) : null}
              </ul>
              <div className="card-body text-center">
                <button className="btn btn-warning">
                  <Link
                    to="/pokemones"
                    className="text-black text-decoration-none"
                  >
                    Volver
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}