import React from 'react';
import '../style/Menu.css';

const menuItems = [
  {
    name: 'Pink Lemonade',
    price: '£17',
    description: 'A citrusy twist on tradition, this signature blend balances lemon zest and ripe berries.'
  },
  {
    name: 'Double Apple',
    price: '£15',
    description: 'Classic sweet and sour fusion using premium molasses for a smooth experience.'
  },
  {
    name: 'Minty Grape',
    price: '£16',
    description: 'A cooling blend of crisp mint and dark grape for a refreshing kick.'
  },
  {
    name: 'Blueberry Chill',
    price: '£16',
    description: 'Juicy blueberries with a cold exhale. A top choice for relaxing nights.'
  },
  {
    name: 'Strawberry Mojito',
    price: '£8',
    description: 'Fresh strawberries muddled with mint, lime, and soda for a crisp refreshment.'
  },
  {
    name: 'Lychee Breeze',
    price: '£9',
    description: 'Delicate lychee and light floral notes paired with crushed ice for a dreamy sip.'
  }
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="item-header">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </div>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
