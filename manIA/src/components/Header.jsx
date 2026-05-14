import React, { useState } from 'react';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const manejarToggle = () => setMenuAbierto(!menuAbierto);

  return (
    <header className="cabecera-principal">
      <div className="contenedor-navegacion">
        <div className="logo-sitio">
          <a href="/">Agentes<span>IA</span></a>
        </div>

        <nav className="menu-navegacion" aria-label="Navegación principal">
          {/* Botón para móviles - Estructura lista para el Estudiante 4 */}
          <button 
            className="boton-menu" 
            onClick={manejarToggle}
            aria-expanded={menuAbierto}
          >
            <span className="linea-hamburguesa"></span>
          </button>

          <ul className={menuAbierto ? "lista-links abierta" : "lista-links"}>
            <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
            <li><a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a></li>
            <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;