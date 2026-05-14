import React from 'react';

const Formulario = () => {
  return (
    <section id="contacto" className="register-section" aria-labelledby="form-title">
      <h2 id="form-title" className="register-section__title">Regístrate para probar la IA</h2>

      <form className="form" onSubmit={(e) => e.preventDefault()} noValidate>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Datos de registro</legend>

          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Nombre completo <span aria-hidden="true" className="form__required">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder="Ej. Santiago Bonilla"
              autoComplete="name"
              required
              aria-required="true"
              aria-describedby="name-hint"
            />
            <span id="name-hint" className="form__hint">Ingresa tu nombre y apellido</span>
          </div>

          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Correo electrónico <span aria-hidden="true" className="form__required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              required
              aria-required="true"
              aria-describedby="email-hint"
            />
            <span id="email-hint" className="form__hint">Ej: usuario@dominio.com</span>
          </div>

        </fieldset>

        <p className="form__note" aria-hidden="true">
          <span className="form__required">*</span> Campos obligatorios
        </p>

        <button type="submit" className="form__button">
          Enviar Registro
        </button>
      </form>
    </section>
  );
};

export default Formulario;