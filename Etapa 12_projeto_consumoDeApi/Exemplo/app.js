const contenedor = document.querySelector("#container");

const fakeStoreApi = "https://fakestoreapi.com/products";

let shoppingCart = [];
let productList = [];

const fetchProducts = async () => {
  try {
    const response = await fetch(fakeStoreApi);
    if (!response.ok) {
      throw new Error("Nao foi possivel");
    }

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

const addProductsContainer = (product) => {
  const { id, title, image, price, description, category } = product;
  contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${image}" alt="Card image cap">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${name}</p>
          <p class="subtitle is-6">${title}</p>
        </div>
      </div>
  
      <div class="content">
        <p>Precio: ${price}</p>
        <p>Descripcion: ${description}</p>
        <p>Category: ${category}</p>
        <br>
        <button class="button is-primary" onclick="addProduct(${id})">Comprar Produto</button>
      </div>
    </div>
  </div>
    `;
  }


const getProducts = async () => {
  const products = await fetchProducts();
  products.forEach(addProductsContainer);

  productList = products
  console.log(productList)
};

const addProduct = (id) => {
  shoppingCart.push(productList.find((item) => item.id === id))
  console.log(shoppingCart)
}

getProducts();


