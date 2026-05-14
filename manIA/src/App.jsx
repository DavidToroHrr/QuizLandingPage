import BenefitsSection from './components/BenefitsSection'
import './App.css'


      
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
         
        </section>

        {/* Sección de Formulario (Aquí entrará el Estudiante 3) */}
        <section id="contacto" className="seccion-contacto">
          {/* <Formulario /> */}
          
        </section>

      </main>

      {/* Footer (Aquí entrará el Estudiante 3) */}
      <footer className="pie-pagina">
        <div className="contenedor-footer">
          <p>&copy; 2026 Soluciones IA. Todos los derechos reservados.</p>
        </div>
      </footer>
      <BenefitsSection />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;