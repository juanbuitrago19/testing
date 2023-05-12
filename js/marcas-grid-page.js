import { products } from "./Array-Objects.js";

let var1 = document.querySelector("#show--brands");
let var2 = document.querySelector("#show--products");
let newProductsCount = 0;

let marcas = [...new Set(products.data.map((product) => product.brand))];
let marcasOrdenadas = marcas.sort((a, b) => a.localeCompare(b));

marcasOrdenadas.forEach((marca) => {
    newProductsCount++;

    let liBrandElement = document.createElement("div");
    liBrandElement.classList.add("brand--card--grid");

    let h2CellTitle = document.createElement("h2");
    h2CellTitle.classList.add("cell__title_2");
    h2CellTitle.textContent = marca;
    liBrandElement.appendChild(h2CellTitle);

    var1.appendChild(liBrandElement);

    // Obtener los productos de la primer marca
    if (marca === marcasOrdenadas[0]) {
        const productosMarca = products.data.filter((product) => product.brand === marca);
        productosMarca.forEach((product) => {
            const count2 = products.data.filter((product) => product.brand === marca).length;

            // Actualizar el contador de productos
            let contador2 = document.querySelector("#numNewProducts2");
            contador2.innerHTML = count2 + " Productos";

            let cardProduct = document.createElement("div");
            cardProduct.classList.add("product--card--grid");
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
            var2.appendChild(cardProduct);
        });
    }

    // Agregar un event listener al div
    liBrandElement.addEventListener("click", () => {
        // Limpiar los productos que ya se hayan filtrado
        while (var2.firstChild) {
            var2.removeChild(var2.firstChild);
        }
        // Filtrar los productos que corresponden a la marca del div
        const productosMarca = products.data.filter((product) => product.brand === marca).sort((a, b) => a.price - b.price);

        productosMarca.forEach((product) => {
            const count2 = products.data.filter((product) => product.brand === marca).length;

            // Actualizar el contador de productos
            let contador2 = document.querySelector("#numNewProducts2");
            contador2.innerHTML = count2 + " Productos";

            if (product.stock) {
                let cardProduct = document.createElement("div");
                cardProduct.classList.add("product--card--grid");
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
                var2.appendChild(cardProduct);
            }
        });
    });
});

let contador = document.querySelector("#numNewProducts");
contador.innerHTML = newProductsCount + " Marcas";
