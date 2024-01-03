const loadProducts = () => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};
const loadCategoryProducts = (category) => {
  console.log(category);
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

const displayProducts = (products) => {
  const parent = document.getElementById('products');

  products.forEach((product) => {
    // Create a new div for each product
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-card');

    // Set the innerHTML for each product
    productDiv.innerHTML = `
        <img class="product-img" src=${product.image} alt=${product.title} />
        <h5 class="product-title">${product.title.slice(0, 20)}</h5>
        <hp class="product-price">Price: ${product.price}</hp>
        <p class="product-rating">Rating: ${product.rating.rate}</p>
        <p class="product-description">Description: ${product.description.slice(
          0,
          80
        )}...</p>
        <button ><a href="productDetails.html?productId=${
          product.id
        }" target="_blank">See More</a></button>
      `;

    // Append the productDiv to the parent container
    parent.appendChild(productDiv);
  });
};

const loadCategories = () => {
  fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((category) => {
        const li = document.createElement('li');
        li.classList.add('dropdown-item');
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => loadCategoryProducts(category));
        li.appendChild(button);
        parent.appendChild(li);
      });
    });
};
loadProducts();
loadCategories();
