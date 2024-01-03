const getParams = () => {
  const param = new URLSearchParams(window.location.search).get('productId');
  fetch(`https://fakestoreapi.com/products/${param}`)
    .then((res) => res.json())
    .then((data) => displayProductDetails(data));
};

const displayProductDetails = (product) => {
  const parent = document.getElementById('product-details');
  const productDiv = document.createElement('div');
  productDiv.classList.add('product-card');

  // Set the innerHTML for each product
  productDiv.innerHTML = `
          <img class="product-img" src=${product.image} alt=${product.title} />
          <h5 class="product-title">${product.title}</h5>
          <hp class="product-price">Price: ${product.price}</hp>
          <p class="product-rating">Rating: ${product.rating.rate}</p>
          <p class="product-description">Description: ${product.description}</p>
        `;

  // Append the productDiv to the parent container
  parent.appendChild(productDiv);
};

getParams();
