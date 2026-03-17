import React from 'react';

const MenuItem = ({ name, description, price, isNew, image }) => {
  return (
    <div className="menu-item luxury-card">
      <div className="item-image-wrapper">
        <img src={image} alt={name} className="item-image" />
      </div>
      <div className="item-content">
        <div className="menu-item-header">
          <h3 className="serif">{name} {isNew && <span className="new-badge">Yeni</span>}</h3>
          <span className="price">{price} TL</span>
        </div>
        <p className="description">{description}</p>
        <div className="item-actions">
          <button className="add-btn">Seçiminize Ekleyin</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
