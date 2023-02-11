const contenedor = document.querySelector("#contenedor");

const fakeStoreApi = "https://fakestoreapi.com/products";

let shoppingCart = [];
let productList = [];

let counter = 0


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
  <img class="card-img-top mt-2" src="${image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">Precio: ${price}</p>
      <p class="card-text">Descripcion: ${description}</p>
      <p class="card-text">Cantidad: ${category}</p>
      <button class="btn btn-primary" onclick="addProduct(${id})">Comprar Producto</button>
    </div>
  </div>
  `;
};

const getProducts = async () => {
  const products = await fetchProducts();
  products.forEach(addProductsContainer);

  productList = products;
  // console.log(productList)
};

const addProduct = (id) => {
  if(shoppingCart.some(item => item.id === id)) {
    alert('lmsalkjdals');
    return
  }

  shoppingCart.push({...productList.find((item) => item.id === id), quantity: 1});
  
  console.log(shoppingCart);
  showShoppingCart();
};

const showShoppingCart = () => {
  const modalBody = document.querySelector(".modal .modal-body");

  modalBody.innerHTML = ''

  shoppingCart.forEach((product) => {
    const {title, image, price, category } = product;

    
    modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
          <img class="img-fluid img-carrito" src="${image}"/>
        </div>

        <div>
          <p>Produto: ${title}</p>
          <p>Preço: ${price}</p>
          <p>categoria: ${category}</p>

          <button onClick="addCounterProduct()">+</button>
          <span>${counter}</span>
          <button>-</button>
          <div>
            <button class="btn btn-danger">Eliminar produto</button>
          </div>

        </div>
      </div>
    `
    
  });
};



const addCounterProduct = () => {
  counter++;
  console.log(counter)
}

getProducts();
