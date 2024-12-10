// Sample products data
const products = [
    {
      name: "Chocolate Croissant",
      price: "25 da",
      image: "https://via.placeholder.com/200x150",
    },
    {
      name: "Macaron Box",
      price: "1200 da",
      image: "https://via.placeholder.com/200x150",
    },
    {
      name: "Fruit Tart",
      price: "150 da",
      image: "https://via.placeholder.com/200x150",
    },
    {
      name: "Éclair",
      price: "140 da",
      image: "https://via.placeholder.com/200x150",
    },
  ];
  
  // Render products dynamically
  const productGrid = document.getElementById("product-grid");
  
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
  
    productGrid.appendChild(productCard);
  });