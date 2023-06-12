const showErrorMessage = (message: string): void => {
  alert(message);
};

const validarFormulario = () => {
  var errors: string[] = [];
  var regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  var nombre = document.forms[0].nombre.value;
  var apellido = document.forms[0].apellido.value;
  var email = document.forms[0].email.value;

  if (nombre.trim() === "") {
    errors.push("El campo nombre es obligatorio\n");
  }

  if (apellido.trim() === "") {
    errors.push("El campo apellido es obligatorio\n");
  }

  if (email.trim() === "") {
    errors.push("El campo email es obligatorio\n");
  } else if (!regexEmail.test(email)) {
    errors.push("Por favor, ingresa un email válido\n");
  }

  if (errors.length > 0) {
    var errorMessage = errors.join("");
    showErrorMessage(errorMessage);
    return false;
  }
  return true;
};
