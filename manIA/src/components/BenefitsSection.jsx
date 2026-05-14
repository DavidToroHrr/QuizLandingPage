import React from 'react';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const benefitsData = [
    {
      id: 1,
      title: 'Automatización 24/7',
      description: 'Nuestros agentes operan sin interrupciones, optimizando procesos y ejecutando tareas repetitivas en todo momento para que tu equipo se enfoque en lo estratégico.'
    },
    {
      id: 2,
      title: 'Análisis de Datos',
      description: 'Procesamiento en tiempo real de grandes volúmenes de información para generar insights precisos y apoyar la toma de decisiones informadas y basadas en datos.'
    },
    {
      id: 3,
      title: 'Personalización',
      description: 'Respuestas e interacciones adaptadas de forma única a cada usuario, mejorando la retención, la satisfacción del cliente y la experiencia de usuario de manera escalable.'
    }
  ];

  return (
    <section className="benefits">
      <div className="benefits__container">
        <header className="benefits__header">
          <h2 className="benefits__title">¿Por qué elegir nuestros Agentes de IA?</h2>
          <p className="benefits__subtitle">Impulsa tu negocio al siguiente nivel con tecnología de vanguardia y automatización inteligente.</p>
        </header>
        <div className="benefits__grid">
          {benefitsData.map(benefit => (
            <BenefitCard
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
