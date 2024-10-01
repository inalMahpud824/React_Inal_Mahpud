const dataProduct = [
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
const currentData = JSON.parse(localStorage.getItem("dataProduct"));
if (!currentData || currentData.length === 0) {
  localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
} else {
  const tbody = document.getElementById("tbody");
  currentData.forEach((product) => {
    tbody.innerHTML += `
      <tr>
        <th>${product.id}</th>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.freshness}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td>${product.image}</td>
      </tr>
      `;
  });
}
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("nameProduct").value;
  const category = document.getElementById("product-category").value;
  const freshness = document.querySelector(
    'input[name="productFreshness"]:checked'
  ).value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("text-description").value;
  const image = "image default";

  const data = JSON.parse(localStorage.getItem("dataProduct")) || [];
  data.push({
    id: data.length + 1,
    name: name,
    category: category,
    freshness: freshness,
    price: price,
    description: description,
    image: image,
  });
  localStorage.setItem("dataProduct", JSON.stringify(data));
  window.location.reload();
});

function deleteData() {
  const data = JSON.parse(localStorage.getItem("dataProduct")) || [];
  data.pop();
  localStorage.setItem("dataProduct", JSON.stringify(data));
  window.location.reload();
}

function searchData() {
  const dataSearch = document.getElementById("searchData").value;
  const data = JSON.parse(localStorage.getItem("dataProduct")) || [];
  const index = data.find((product) => product.name == dataSearch);
  console.log(index)
  if(index == -1){
    return
  }else{
    const name = index.name;
    const category = index.category;
    const freshness = index.freshness;
    const price = index.price;
    const description = index.description;
    window.alert(
      `Data Product yang cari:\n
      Nama Product: ${name}\n 
      category: ${category}\n
      freshness: ${freshness}\n
      price: ${price}\n
      description:  ${description}\n`
    );
  }
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  const alert = document.getElementById("alert");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert.classList.remove("d-none");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
