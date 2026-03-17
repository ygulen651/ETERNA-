import React from 'react';
import MenuItem from './MenuItem';

// Image Imports
import oysterImg from '../assets/oyster.png';
import carpaccioImg from '../assets/carpaccio.png';
import burrataImg from '../assets/burrata.png';
import lobsterImg from '../assets/lobster.png';
import duckImg from '../assets/duck.png';
import risottoImg from '../assets/risotto.png';
import souffleImg from '../assets/souffle.png';
import pannacottaImg from '../assets/pannacotta.png';
import wineImg from '../assets/wine.png';
import matchaGinImg from '../assets/matcha_gin.png';

const menuData = {
  appetizers: [
    { name: 'Oyster Rockefeller', description: 'Ispanak, taze otlar ve ekmek kırıntılarıyla fırınlanmış taze istiridyeler.', price: 750, isNew: true, image: oysterImg },
    { name: 'Dana Carpaccio', description: 'İnce dilimlenmiş wagyu sığır eti, roka, kapari ve parmesan rendesi.', price: 580, image: carpaccioImg },
    { name: 'Trüflü Burrata', description: 'Kremalı burrata peyniri, heirloom domatesler, balzamik sirke ve taze trüf mantarı.', price: 620, image: burrataImg }
  ],
  main: [
    { name: 'Istakoz Thermidor', description: 'Zengin konyaklı krema sosu ve parmesan ile lezzetlendirilmiş ıstakoz eti.', price: 1850, image: lobsterImg },
    { name: 'Ördek Konfi', description: 'Kısık ateşte pişmiş ördek but, portakal sosu ve bal ile karamelize edilmiş havuçlar.', price: 1250, image: duckImg },
    { name: 'Yabani Mantarlı Risotto', description: 'Orman mantarları, trüf yağı ve yıllanmış parmesan ile hazırlanan İtalyan pirinci.', price: 850, isNew: true, image: risottoImg }
  ],
  desserts: [
    { name: 'Altın Varaklı Sufle', description: 'Yenilebilir 24 ayar altın varaklı, yoğun bitter çikolatalı sufle.', price: 450, image: souffleImg },
    { name: 'Safranlı Panna Cotta', description: 'İran safranı ile demlenmiş, yaban mersini sosu eşliğinde.', price: 380, image: pannacottaImg }
  ],
  drinks: [
    { name: 'Vintage Bordeaux', description: 'Château Margaux 2015, dolgun gövdeli, siyah frenk üzümü notalarıyla.', price: 4200, image: wineImg },
    { name: 'Kyoto Matcha Cin', description: 'Törensel kalite matcha ve yuzu ile infüze edilmiş zanaatkar cin.', price: 750, image: matchaGinImg }
  ]
};

const MenuSection = ({ category }) => {
  const titles = {
    appetizers: 'Başlangıçlar',
    main: 'Ana Yemekler',
    desserts: 'Tatlılar',
    drinks: 'İçecekler'
  };
  
  const items = menuData[category] || [];
  
  return (
    <div className="menu-section">
      <h2 className="section-title serif">{titles[category]} Seçkisi</h2>
      <div className="menu-grid">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
