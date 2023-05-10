import img from "../components/assets/2023-04-28 (6).png";
import estilos from "./styles/about.module.css";

export default function About() {
  return (
    <div className={estilos.divAbout}>
      <div className={estilos.contenedorImgH3}>
        <img src={img} alt="yo" className={estilos.imgAbout} />
        <h3>
          Hi, I'm Marcos and I live in San Isidro, Buenos Aires, Argentina.
          Programming has been one of my biggest passions since I discovered it
          in 2022. I spent a year at Coderhouse to learn more and now I'm
          continuing my education in module two of the Henry Bootcamp. When I'm
          not coding, I enjoy exploring other interests and discovering new
          hobbies.
        </h3>
      </div>
    </div>
  );
}
