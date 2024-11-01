const API_URL = 'http://localhost:3000/api/auth';

export const login = async (username: string, password: string): Promise<string> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Erro ao realizar login');
  }

  const data = await response.json();
  return data.token; // Retornar o token JWT
};