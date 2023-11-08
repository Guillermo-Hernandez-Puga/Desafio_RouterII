export default function LogoHeader({ url }) {
    return (
      <a
        href="#"
        className="text-decoration-none text-white d-flex align-items-center m-3 "
      >
        <img src={url} alt="PokemonBall" style={{ height: "8vh" }} />
      </a>
    );
  }