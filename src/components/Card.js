import React from 'react';
import styles from '../App.module.css';

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.img} alt={data.name} className={styles.cardImage} />
      <div className={styles.cardInfo}>
        <h3>{data.name}</h3>
        <p><strong>Tipo:</strong> {data.type}</p>
        <p><strong>Facção:</strong> {data.faction}</p>
        <p><strong>Coleção:</strong> {data.cardSet}</p>
        <p><strong>Raridade:</strong> {data.rarity}</p>
        <p><strong>Custo de Mana:</strong> {data.cost}</p>
        <p><strong>Ataque:</strong> {data.attack}</p>
        <p><strong>Vida:</strong> {data.health}</p>
        <p><strong>Descrição:</strong> {data.flavor}</p>
        <p><strong>Artista:</strong> {data.artist}</p>
        <p><strong>Classe:</strong> {data.playerClass}</p>
        {data.howToGetDiamond && (
          <p><strong>Como obter diamante:</strong> {data.howToGetDiamond}</p>
        )}
      </div>
    </div>
  );
};

export default Card;