const products = [
  {
    name: "シマノ 22ステラ C3000XG",
    price: 45000,
    image: "https://picsum.photos/300/200?1",
    url: "https://www.google.com/search?q=シマノ+22ステラ+C3000XG"
  },
  {
    name: "ダイワ イグジスト LT2500",
    price: 38000,
    image: "https://picsum.photos/300/200?2",
    url: "https://www.google.com/search?q=ダイワ+イグジスト+LT2500"
  },
  {
    name: "シマノ ワールドシャウラ 1702R",
    price: 32000,
    image: "https://picsum.photos/300/200?3",
    url: "https://www.google.com/search?q=シマノ+ワールドシャウラ+1702R"
  }
];

function displayProducts(list) {
    const container = document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <a class="card" href="${product.url}" target="_blank">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString()}円</p>
            </a>
        `;
    });
}

function searchProducts() {
    const keyword = document.querySelector(".search-box").value;

    const filteredProducts = products.filter(product => {
        return product.name.includes(keyword);
    });

    displayProducts(filteredProducts);
}

function sortLow() {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
}

function sortHigh() {
    products.sort((a, b) => b.price - a.price);
    displayProducts(products);
}

document.querySelector(".search-box").addEventListener("input", searchProducts);

displayProducts(products);