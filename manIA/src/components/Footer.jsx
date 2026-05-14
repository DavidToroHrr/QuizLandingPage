import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <p className="footer__copy">&copy; 2026 manIA. Universidad Autónoma de Manizales.</p>
        <div className="footer__socials">
          <a href="#linkedin" className="footer__link" aria-label="LinkedIn de manIA">LinkedIn</a>
          <a href="#github" className="footer__link" aria-label="Repositorio de GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;