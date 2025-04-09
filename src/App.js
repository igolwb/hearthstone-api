import React, { useState } from 'react';
import { fetchCardsByName } from './services/api';
import Card from './components/Card';
import styles from './App.module.css';

function App() {
  const [cards, setCards] = useState([]); // Armazena todos os resultados da busca
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (name) => {
    try {
      const response = await fetchCardsByName(name);
      setCards(response); // Atualiza o estado com todos os resultados
    } catch (error) {
      console.error('Erro ao buscar cartas:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Digite o nome da carta..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={() => handleSearch(searchTerm)} className={styles.searchButton}>
          Buscar
        </button>
      </div>

      <p className={styles.exemplosText}>Exemplo de cartas: Leeroy Jenkins, Tece-Sonhos Resplandecente, King Tide, Zilliax, Rei Phaoris...</p>

      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <Card key={card.dbfId} data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;