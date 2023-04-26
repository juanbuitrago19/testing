let products = {
    data: [
      {
        productName: "Paleta color vibes ",
        brand: "Beauty Glazed",
        category: "Sombras",
        price: "60.000",
        discount: true,
        newProduct: true,
        image: "product-0000001.jpg",
        URL: ""
      },
      {
        productName: "Paleta color studio ",
        brand: "Beauty Glazed",
        category: "Sombras",
        price: "50.000",
        discount: true,
        newProduct: true,
        image: "product-0000002.jpg",
      },
      {
        productName: "Paleta hawaii",
        brand: "Atenea",
        category: "Sombras",
        price: "78.000",
        discount: true,
        newProduct: true,
        image: "product-0000003.jpg",
      },
      {
        productName: "Paleta majestic",
        brand: "Atenea",
        category: "Sombras",
        price: "70.000",
        discount: true,
        newProduct: true,
        image: "product-0000004.jpg",
      },
    ],
  };


  let productsContainer = document.querySelector("#products");
    products.data.forEach(product => {

        let cardProduct = document.createElement("div");
        cardProduct.classList.add("slide", "card-product");
        cardProduct.setAttribute("onclick", "window.location.href='bases.html';");

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
        priceSpan.textContent = product.price;
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
        productsContainer.appendChild(cardProduct);
});
  

