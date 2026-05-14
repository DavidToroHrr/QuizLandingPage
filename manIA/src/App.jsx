import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Componente de Navegación (Estudiante 1) */}
      <Header />

      {/* Contenedor Semántico Principal (Estudiante 1) - Todo el contenido va aquí dentro */}
      <main className="contenido-principal">
        
        {/* Tu Hero Section */}
        <Hero />

        {/* Sección de Beneficios (Estudiante 2) */}
        {/* El ID "servicios" debe estar en el contenedor para que el link del Header llegue aquí */}
        <section id="servicios" className="seccion-beneficios">
          <BenefitsSection />
        </section>

        {/* Sección de Formulario (Estudiante 3) */}
        {/* El ID "contacto" permite que al hacer clic en el Header, la página baje hasta aquí */}
        <section id="contacto" className="seccion-contacto">
          <Formulario />
        </section>

      </main>

      {/* Footer (Estudiante 3) */}
      <Footer />
    </div>
  );
}

export default App;