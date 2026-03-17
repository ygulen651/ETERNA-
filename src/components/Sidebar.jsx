import React, { useState } from 'react';

const categories = [
  { id: 'appetizers', label: 'Başlangıçlar' },
  { id: 'main', label: 'Ana Yemekler' },
  { id: 'desserts', label: 'Tatlılar' },
  { id: 'drinks', label: 'İçecekler' }
];

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={`mobile-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu Toggle"
      >
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="logo-section">
          <h2 className="serif">Eterna</h2>
          <span className="subtitle">Fine Dining</span>
        </div>
        <nav className="category-nav">
          <ul>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  className={`nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
