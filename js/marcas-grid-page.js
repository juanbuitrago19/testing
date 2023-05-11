import { products } from "./Array-Objects.js";

let var1 = document.querySelector("#show--brands");
let newProductsCount = 0;

let marcas = [...new Set(products.data.map(product => product.brand))];

marcas.forEach(marca => {

    newProductsCount++;

    let count = products.data.filter(product => product.brand === marca).length;
    let brandUrl = products.data.filter(product => product.brand === marca)[0].brandUrl;


    let liBrandElement = document.createElement("div");
    liBrandElement.classList.add("brand--card--grid");
    liBrandElement.setAttribute("onclick", `window.location.href='${brandUrl}';`);


    let h2CellTitle = document.createElement("h2");
    h2CellTitle.classList.add("cell__title_2");
    h2CellTitle.textContent = marca;
    liBrandElement.appendChild(h2CellTitle);

    let divAlignItemsRight = document.createElement("div");
    divAlignItemsRight.classList.add("align_items_right_2");

    let aNumProducts = document.createElement('a');
    aNumProducts.classList.add("num__products_2");
    aNumProducts.textContent = "("+ count + ")" + "Productos";

    let aCtaViewPage = document.createElement("a");
    aCtaViewPage.classList.add("cta__view__page_2");
    aCtaViewPage.href = brandUrl;
    aCtaViewPage.innerText = 'Ver todo';

    divAlignItemsRight.appendChild(aNumProducts);
    divAlignItemsRight.appendChild(aCtaViewPage);

    liBrandElement.appendChild(divAlignItemsRight);

    var1.appendChild(liBrandElement);

});

let contador = document.querySelector("#numNewProducts");
contador.innerHTML = newProductsCount + " Elementos";



