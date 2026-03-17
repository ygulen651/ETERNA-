import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';

function App() {
  const [activeCategory, setActiveCategory] = useState('main');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.menu-item, .hero-content, .hero-image-container').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <div className="layout-root">
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <main className="content-area">
        <Hero />
        <MenuSection category={activeCategory} />
        <footer className="main-footer">
          <p>© 2026 Eterna Fine Dining. Her lokmada zarafet.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
