function validate(userData) {
  let errors = {};

  // Validar el nombre de usuario como un email con una expresión regular
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(userData.email)) {
    errors.email = "El email ingresado no es válido";
  }

  // Validar que el nombre de usuario no esté vacío
  if (userData.email.trim() === "") {
    errors.email = "El email no puede estar vacío";
  }

  // Validar que el nombre de usuario no tenga más de 35 caracteres
  if (userData.email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  }

  // Validar que la contraseña tenga al menos un número
  const passwordRegex = /\d/;
  if (!passwordRegex.test(userData.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  }

  // Validar que la contraseña tenga entre 6 y 10 caracteres de longitud
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
}

export default validate;
