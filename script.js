
fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const card = `
                <div class="product-card">
                    <a href="${product.link}">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price}</div>
                    </a>
                </div>
            `;
            productList.innerHTML += card;
        });
    });
