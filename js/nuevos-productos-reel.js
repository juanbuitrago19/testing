import { products } from "./Array-Objects.js";

let var2 = document.querySelector("#nuevos-productos-main");
let maxViews = 0;

const newProducts = products.data.filter(product => product.newProduct === true).sort((a, b) => a.price - b.price);

// Función para ordenar aleatoriamente los productos
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(newProducts);


newProducts.forEach(product => {


      if (maxViews < 13) {


        let cardProduct = document.createElement("div");
        cardProduct.classList.add("product--card");

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
     
        brand.appendChild(btnSpan);
        infoSection.appendChild(brand);

        cardProduct.appendChild(imageSection);
        cardProduct.appendChild(infoSection);
        var2.appendChild(cardProduct);
        
        maxViews++;

        
      
      }
      
});



