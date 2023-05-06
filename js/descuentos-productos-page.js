import { products } from "./Array-Objects.js";

let var1 = document.querySelector("#descuentos-productos");
let newProductsCount = 0;

  //Codigo para pagina de nuevos productos
  products.data.forEach(product => {

    if (product.discount) {

    newProductsCount++;

    let cardProduct = document.createElement("div");
    cardProduct.classList.add("slide", "card-product");
    cardProduct.setAttribute("onclick", `window.location.href='${product.url}';`);

    let imageSection = document.createElement("div");
    imageSection.classList.add("image-section");
    let img = document.createElement("img");
    img.setAttribute("src", `images/${product.image}`);
    img.setAttribute("alt", "Image");
    imageSection.appendChild(img);

    let infoSection = document.createElement("div");
    infoSection.classList.add("info-section");

    let titlePrice = document.createElement("div");
    titlePrice.classList.add("title-price");
    let title = document.createElement("span");
    title.textContent = product.productName;
    titlePrice.appendChild(title);

    let priceSpan = document.createElement("span");
    priceSpan.textContent = "$" + product.price;
    titlePrice.appendChild(priceSpan);
    infoSection.appendChild(titlePrice);

    let brand = document.createElement("div");
    brand.classList.add("brand");
    let brandSpan = document.createElement("span");
    brandSpan.classList.add("product-detail-brand");
    brandSpan.textContent = product.brand;
    brand.appendChild(brandSpan);
    let btnSpan = document.createElement("span");
    btnSpan.classList.add("product-detail-btn");
    btnSpan.textContent = "Ver Detalles";
    brand.appendChild(btnSpan);
    infoSection.appendChild(brand);

    cardProduct.appendChild(imageSection);
    cardProduct.appendChild(infoSection);
    var1.appendChild(cardProduct);
    
    }
});


let contador = document.querySelector("#numNewProducts");
contador.innerHTML = newProductsCount + " Productos";
