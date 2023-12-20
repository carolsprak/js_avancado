/* let promise = new Promise(
    function(resolve,reject) {    
    // código de requisição
}
);*/ 

import fetch from 'node-fetch';


async function getFruta(id) {
  try {
    const response = await fetch(`https://fruitshop2-predic8.azurewebsites.net/shop/v2/products/${id}`);
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
  }
}

getFruta(8);
  
 
function getFruta2(id) {
  fetch(`https://fruitshop2-predic8.azurewebsites.net/shop/v2/products/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados'); // Lança um erro caso a requisição não seja bem-sucedida
      }
      return response.json();
    })
    .then(data => {
      console.log(data.name);
    })
    .catch(error => {
      console.error('Erro:', error);
    })
    .finally(() => {
      // Aqui você pode colocar qualquer ação que deseja executar após a execução do then/catch
      // Pode ser vazio se não houver nenhuma ação específica a ser executada.
    });
}

getFruta2(11);
 
 
async function getFruta3(id) {
    let response = await fetch(`https://fruitshop2-predic8.azurewebsites.net/shop/v2/products/${id}`);
    let data = await response.json();

    return data.name;
}

console.log(await getFruta3(5)); 