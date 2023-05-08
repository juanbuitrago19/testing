import { products } from "./Array-Objects.js";

let var2 = document.querySelector("#nuevos-productos-main");
let maxViews = 0;

    //Codigo para reel nuevos productos
    products.data.forEach(product => {

      if (maxViews < 13) {

        let randomNumber = Math.floor(Math.random()*products.data.length);
        let utilVar = products.data[randomNumber];

        if (utilVar.newProduct) {

        let cardProduct = document.createElement("div");
        cardProduct.classList.add("product--card");
        cardProduct.setAttribute("onclick", `window.location.href='${utilVar.url}';`);

        let imageSection = document.createElement("div");
        imageSection.classList.add("image-section");
        let img = document.createElement("img");
        img.setAttribute("src", `images/${utilVar.image}`);
        img.setAttribute("alt", "Image");
        imageSection.appendChild(img);

        let infoSection = document.createElement("div");
        infoSection.classList.add("info-section");

        let titlePrice = document.createElement("div");
        titlePrice.classList.add("title-price");
        let title = document.createElement("span");
        title.textContent = utilVar.productName;
        titlePrice.appendChild(title);

        let priceSpan = document.createElement("span");
        priceSpan.textContent = "$" + utilVar.price;
        titlePrice.appendChild(priceSpan);
        infoSection.appendChild(titlePrice);

        let brand = document.createElement("div");
        brand.classList.add("brand");
        let brandSpan = document.createElement("span");
        brandSpan.classList.add("product-detail-brand");
        brandSpan.textContent = utilVar.brand;
        brand.appendChild(brandSpan);
        let btnSpan = document.createElement("span");
        btnSpan.classList.add("product-detail-btn");
        btnSpan.textContent = "Ver Detalles";
        brand.appendChild(btnSpan);
        infoSection.appendChild(brand);

        cardProduct.appendChild(imageSection);
        cardProduct.appendChild(infoSection);
        var2.appendChild(cardProduct);
        
        maxViews++;

        }
      }
      
});



