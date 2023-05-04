let products = {
    data: [
      {
        productName: "producto 1",
        brand: "Beauty Glazed",
        category: "Sombras",
        price: "60.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000001.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 2",
        brand: "Beauty Glazed",
        category: "Sombras",
        price: "50.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000002.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 3",
        brand: "Atenea",
        category: "Sombras",
        price: "78.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000003.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 4",
        brand: "Atenea",
        category: "Sombras",
        price: "70.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000004.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 5",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000143.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 6",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000005.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 7",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000006.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 8",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000007.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 9",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000008.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 10",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000009.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 11",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000100.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 12",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000101.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 13",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000102.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 14",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000103.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 15",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000104.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 16",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000105.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 17",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000106.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 18",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000107.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 19",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000108.jpg",
        url: "product-1.html"
      },
      {
        productName: "producto 20",
        brand: "Atenea",
        category: "Sombras",
        price: "80.000",
        stock: true,
        discount: true,
        newProduct: true,
        image: "product-0000109.jpg",
        url: "product-1.html"
      },
    ],
  };


  let productsContainer = document.querySelector("#nuevos-productos");
  let newProductsCount = 0;
  let maxViews = 0;


    products.data.forEach(product => {

      if (maxViews < 10) {

          //Generamos un número aleatorio entre 0 y el tamaño del array
        let randomNumber = Math.floor(Math.random()*products.data.length);
        let product = products.data[randomNumber];

        if (product.newProduct) {

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
        productsContainer.appendChild(cardProduct);
        
        maxViews++;

        }
      }
});

let numNewProductsContainer = document.querySelector("#numNewProducts");
numNewProductsContainer.innerHTML = newProductsCount + " Productos";
  

