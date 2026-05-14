import React from 'react';
import manIA from '../assets/manIA.png';

const Hero = () => {
  return (
    <section id="inicio" className="seccion-hero">
      <div className="contenedor-hero">
        <article className="contenido-hero">
          {/* Tu H1: El punto más importante de la estructura semántica */}
          <h1 className="titulo-principal">
            Automatiza tu futuro con Agentes de Inteligencia Artificial
          </h1>
          <p className="descripcion-hero">
            Creamos sistemas inteligentes que gestionan tus tareas operativas, 
            permitiéndote enfocar tu talento en lo que realmente importa.
          </p>
          <div className="grupo-botones-hero">
            <a href="#contacto" className="boton-accion-principal">Solicitar información</a>
            <a href="#servicios" className="boton-accion-secundario">Ver beneficios</a>
          </div>
        </article>

        <figure className="imagen-hero">
          <img 
            src={manIA} 
            alt="Ilustración representativa de inteligencia artificial" 
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;