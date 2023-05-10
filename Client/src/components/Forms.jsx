import imagenGif from "./assets/imagenForm.gif";
import estilos from "./styles/form.module.css";
import { useState } from "react";
import validate from "./validation";
import { useEffect } from "react";
import imagen from "./assets/hola.png";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate(userData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      props.login(userData);
    } else {
      alert("usuario invalido");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    const newErrors = validate({ ...userData, [name]: value });
    setErrors(newErrors);
  }
  return (
    <div className={estilos.divForm}>
      <div className={estilos.cartaForm}>
        <div className={estilos.divImg}>
          <img src={imagenGif} alt="imagen" />
        </div>
        <div className={estilos.divFormCarta}>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={estilos.error}>{errors.email}</p>}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={estilos.error}>{errors.password}</p>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              className={estilos.btnForm}
            >
              <h3 className={estilos.h3}>Submit</h3>
            </button>
          </form>
        </div>
      </div>
      <div className={estilos.divImgGrande}>
        <img src={imagen} alt="imagen" />
      </div>
    </div>
  );
}
