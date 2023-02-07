const getUser = async () => {
  try {
    const response = await fetch('../Aula 7 8 12 17 request HTTP/JSON/todos-02.json')
    if(!response.ok) {
      throw new Error('nao foi possivel obter os dados')
    }
    return response.json()

  } catch (error) {
    console.log(error.message);
  }
};

const logUser = async () => {
  const users = await getUser();
  console.log(users);
};

logUser();
