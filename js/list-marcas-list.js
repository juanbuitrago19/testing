import { products } from "./Array-Objects.js";

let var1 = document.querySelector("#show--brands");

let marcas = [...new Set(products.data.map(product => product.brand))];
let marcasOrdenadas = marcas.sort((a, b) => a.localeCompare(b));
let maxViews = 0;

marcasOrdenadas.forEach(marca => {

    if (maxViews < 15) {

    let count = products.data.filter(product => product.brand === marca).length;
    let brandUrl = products.data.filter(product => product.brand === marca)[0].brandUrl;


    let liBrandElement = document.createElement("li");
    liBrandElement.classList.add("brand__element", "border-line");
    liBrandElement.setAttribute("onclick", `window.location.href='${brandUrl}';`);


    let h2CellTitle = document.createElement("h2");
    h2CellTitle.classList.add("cell__title_2");
    h2CellTitle.textContent = marca;
    liBrandElement.appendChild(h2CellTitle);

    let divAlignItemsRight = document.createElement("div");
    divAlignItemsRight.classList.add("align_items_right");

    let aNumProducts = document.createElement('a');
    aNumProducts.classList.add("num__products");
    aNumProducts.textContent = "("+ count + ")";

    let aCtaViewPage = document.createElement("a");
    aCtaViewPage.classList.add("cta__view__page");
    aCtaViewPage.href = brandUrl;
    aCtaViewPage.innerText = 'Ver todo';

    divAlignItemsRight.appendChild(aNumProducts);
    divAlignItemsRight.appendChild(aCtaViewPage);

    liBrandElement.appendChild(divAlignItemsRight);

    var1.appendChild(liBrandElement);

    maxViews++;

    }

});


