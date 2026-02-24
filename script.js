const productGrid = document.getElementById('product-grid');
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-button');

// JSON Verilerini Çekme
fetch('products.json')
    .then(res => res.json())
    .then(data => {
        renderProducts(data);
    });

// Ürünleri Listele
function renderProducts(products) {
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <span>${product.name}</span><br>
                <span style="color: #999;">${product.price}</span>
            </div>
        `;
        div.onclick = () => openDetails(product);
        productGrid.appendChild(div);
    });
}

// Detay Penceresini Aç
function openDetails(product) {
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image">
                <img src="${product.image}" style="width:100%;">
            </div>
            <div class="modal-text">
                <h2 style="font-weight: 200; text-transform: uppercase;">${product.name}</h2>
                <p style="color: #666; font-size: 0.9rem; margin-top: 20px;">${product.description}</p>
                <p style="font-size: 1.1rem; margin-top: 30px;">${product.price}</p>
                <a href="${product.buy_url}" target="_blank" class="buy-button">SATIN AL</a>
            </div>
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Arka plan kaymasın
}

// Modal Kapatma
closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
