const initialProducts = [
  {
    id: 1,
    name: "test pertama",
    category: "test pertama",
    freshness: "test pertama",
    price: 1,
    description: "ini adalah product test pertama",
    image: "test pertama",
  },
  {
    id: 2,
    name: "test kedua",
    category: "test kedua",
    freshness: "test kedua",
    price: 1,
    description: "ini adalah product test kedua",
    image: "test kedua",
  },
];

function loadProducts() {
  const storedProducts =
    JSON.parse(localStorage.getItem("dataProduct")) || initialProducts;
  localStorage.setItem("dataProduct", JSON.stringify(storedProducts));

  const tbody = document.getElementById("productTableBody");
  tbody.innerHTML = ""; // Clear the table before appending
  storedProducts.forEach((product) => {
    tbody.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.freshness}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
      </tr>
    `;
  });
}

function validateForm() {
  const form = document.getElementById("productForm");
  return form.checkValidity();
}

function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    document.getElementById("formAlert").classList.remove("d-none");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name: document.getElementById("nameProduct").value,
    category: document.getElementById("productCategory").value,
    freshness: document.querySelector('input[name="productFreshness"]:checked')
      .value,
    description: document.getElementById("textDescription").value,
    price: document.getElementById("price").value,
    image: document.getElementById("inputFile").value,
  };

  const storedProducts = JSON.parse(localStorage.getItem("dataProduct")) || [];
  storedProducts.push(newProduct);
  localStorage.setItem("dataProduct", JSON.stringify(storedProducts));

  loadProducts();
  document.getElementById("productForm").reset();
}

function searchProduct() {
  const searchTerm = document.getElementById("searchData").value.toLowerCase();
  const storedProducts = JSON.parse(localStorage.getItem("dataProduct")) || [];

  const filteredProducts = storedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  const tbody = document.getElementById("productTableBody");
  tbody.innerHTML = ""; // Clear the table before appending
  filteredProducts.forEach((product) => {
    tbody.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.freshness}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
      </tr>
    `;
  });
}

function deleteProduct() {
  localStorage.removeItem("dataProduct");
  loadProducts();
}

// Initialize the form on page load
document.getElementById("productForm").addEventListener("submit", handleSubmit);
window.addEventListener("load", loadProducts);