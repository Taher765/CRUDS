let productName = document.querySelector("#product-name");
let productPrice = document.querySelector("#product-price");
let productCategory = document.querySelector("#product-category");
let productDese = document.querySelector("#product-desc");
let btnAddProduct = document.querySelector("#addProduct");
let create = true;
let globaleIndex = "";
let productsContainer = [];

// add Product Of object // => main FunCtion ////////////////

btnAddProduct.addEventListener("click", addProduct);

function addProduct() {
  let productObj = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDese.value,
  };
  // productsContainer.push(productObj);

  if (create) {
    emptyData(productObj); // call function empty Data
  } else {
    productsContainer[globaleIndex] = productObj;
    create = true;
    btnAddProduct.innerHTML = "Add Product";
    clearForm(); // call Function clear Form;
  }
  // console.log(productsContainer);
  displayData(); // call Function Dispaly Data
}

// check Data Empty //////////////////

function emptyData(productObj) {
  if (
    productName.value != "" &&
    productPrice.value != "" &&
    productCategory.value != "" &&
    productDese.value != ""
  ) {
    productsContainer.push(productObj);
    clearForm(); // call Function Clear Form
  }
}

// Clear Form
function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDese.value = "";
}

// Function Display data On Screen //////////////////

function displayData() {
  let tableBody = document.querySelector("#tableBody");
  let content = ``;
  productsContainer.forEach((e, i) => {
    content += `
      <tr class="align-middle">
        <td>${i + 1}</td>
        <td>${e.name}</td>
        <td>${e.price}</td>
        <td>${e.category}</td>
        <td>${e.desc}</td>
        <td>
          <button onclick="updateProduct(${i})" class="btn btn-warning">Updet</button>
        </td>
        <td>
          <button onclick="delProduct(${i})" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    `;
    globaleIndex = i;
  });
  tableBody.innerHTML = content;
}

// Delete Product
function delProduct(index) {
  console.log(index);
  productsContainer.splice(index, 1);
  // console.log(productsContainer.splice(index, 1));
  displayData();
}

// update product
function updateProduct(index) {
  console.log(index);
  productName.value = productsContainer[index].name;
  productPrice.value = productsContainer[index].price;
  productCategory.value = productsContainer[index].category;
  productDese.value = productsContainer[index].desc;
  btnAddProduct.innerHTML = "Update Product";
  create = false;
}

// Search Product
let inputSearch = document.querySelector("#search");
inputSearch.addEventListener("keyup", searchProduct);
function searchProduct() {
  let content = ``;
  productsContainer.forEach((el, i) => {
    if (
      el.name.toLowerCase().includes(inputSearch.value.toLowerCase()) == true
    ) {
      content += `
      <tr class="align-middle">
        <td>${i + 1}</td>
        <td>${el.name}</td>
        <td>${el.price}</td>
        <td>${el.category}</td>
        <td>${el.desc}</td>
        <td>
          <button class="btn btn-warning">Updet</button>
        </td>
        <td>
          <button onclick="delProduct(${i})" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    `;
    }
  });
  tableBody.innerHTML = content;
}
