const validador = (val, campo) => {
  const vali = (val, campo) => {
    if (val.test(campo.value)) {
      campo.classList.remove('is-invalid');
      campo.classList.remove('is-valid');
      campo.classList.add('is-valid');
    } else {
      campo.classList.remove('is-valid');
      campo.classList.remove('is-invalid');
      campo.classList.add('is-invalid');
    }
  };
  vali(val, campo);
};
export default validador;
