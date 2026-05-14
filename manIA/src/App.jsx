import Formulario from './components/Formulario';
import Footer from './components/Footer';


      
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app-container">
      {/* Componente de Navegación (Estudiante 1) */}
      <Header />

      {/* Contenedor Semántico Principal (Estudiante 1) */}
      <main className="contenido-principal">
        
        {/* Componente Hero (Estudiante 1) */}
        <Hero />

        {/* Sección de Beneficios (Aquí entrará el Estudiante 2) */}
        <section id="servicios" className="seccion-beneficios">
          {/* <Beneficios /> */}
          <h2 style={{textAlign: 'center', padding: '50px 0'}}>
            Sección de Beneficios (Pendiente Estudiante 2)
          </h2>
        </section>

        {/* Sección de Formulario (Aquí entrará el Estudiante 3) */}
        <section id="contacto" className="seccion-contacto">
          {/* <Formulario /> */}
          <h2 style={{textAlign: 'center', padding: '50px 0'}}>
            Sección de Contacto (Pendiente Estudiante 3)
          </h2>
        </section>

      </main>

      {/* Footer (Aquí entrará el Estudiante 3) */}
      <footer className="pie-pagina">
        <div className="contenedor-footer">
          <p>&copy; 2026 Soluciones IA. Todos los derechos reservados.</p>
        </div>
      </footer>

      <Formulario />
      <Footer />
    </div>
  );
}

export default App;