import Redis from 'ioredis';

 // Cria uma instância do cliente Redis que se conecta ao servidor Redis local (por padrão, localhost:6379)
export const redis = new Redis();

// Função para definir um valor em uma chave
async function setValue(key: string, value: string): Promise<void> {
    await redis.set(key, value);
    console.log(`Chave ${key} definida com valor ${value}`);
  }

// Função para obter um valor de uma chave
async function getValue(key: string): Promise<string | null> {
  const value = await redis.get(key);
  console.log(`Valor da chave ${key}: ${value}`);
  return value;
}

// Função para obter um valor de uma chave
async function deleteValue(key: string): Promise<void> {
    await redis.del(key);
    console.log(`Chave ${key} excluida`);
}

// Exemplo de uso
(async () => {
  await setValue('minhaChave', 'meuValor');
  await getValue('minhaChave');
  await deleteValue('minhaChave')

  // Fecha a conexão com o Redis
  redis.disconnect();
})();