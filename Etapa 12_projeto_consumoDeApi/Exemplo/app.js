const container = document.querySelector("#container");

const fakeStoreApi = "https://fakestoreapi.com/products";

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

const getProducts = async () => {
  const products = await fetchProducts();

  products.forEach((product) => {
    const { id, title, image, price, description } = product;
    container.innerHTML += `
    <div class="card columns is-desktop">
    <div class="card-image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48 ">
            <img src="${image}" class="columns is-desktop" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${title}</p>
          <p class="subtitle is-6">${price}</p>
        </div>
      </div>
  
      <div class="content">
        ${id}
        ${description}
        <br>
      </div>
    </div>
  </div>
    `;
  });
};

getProducts();
