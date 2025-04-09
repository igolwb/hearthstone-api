import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  headers: {
    'x-rapidapi-key': '6cc690f64fmsh012db8eaeaddb1fp1d4c92jsnbcccf42813f6',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
});

// Função para buscar cartas pelo nome com locale
export const fetchCardsByName = async (name, locale = 'ptBR') => {
  try {
    const response = await api.get(`/${encodeURIComponent(name)}?locale=${locale}`);
    return response.data; // Assume que a API retorna um array de cartas
  } catch (error) {
    console.error('Erro ao buscar cartas:', error);
    throw error;
  }
};

export default api;