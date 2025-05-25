import React from 'react';
import styles from '../App.module.css';

const MenuSection = ({ category, items }) => (
  <section className={styles.section}>
    <h2>{category}</h2>
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className={styles.menuItem}>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default MenuSection;
