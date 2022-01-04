const closeBtn = document.querySelector('.btn-close');

function createProduct() {
    const products = JSON.parse(localStorage.getItem('products')) || 
    [
        {
            "id":1282406738503,
            "name":"Nike Blazer Mid",
            "price":"9.230.000",
            "image":"./images/blog-1.jpg",
            "brand":"nike",
            "description":"This is a beautiful shoe suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023127358,
            "name":"Giày Supernova+",
            "price":"10.000.000",
            "image":"./images/blog-15.jpg",
            "brand":"adidas",
            "description":"This is a beautiful shoe suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        
        {
            "id":509840079795,
            "name":"Nike Blazer Mid '77 Vintage",
            "price":"2.300.000",
            "image":"./images/blog-4.jpg",
            "brand":"nike",
            "description":"This is a beautiful shoe suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":509840079125,
            "name":"Nike React Live",
            "price":"2.300.000",
            "image":"./images/blog-5.jpg",
            "brand":"nike",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":512840079125,
            "name":"Nike React Infinity Run Flyknit",
            "price":"3.490.000",
            "image":"./images/blog-6.jpg",
            "brand":"nike",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587312,
            "name":"Giày Stan Smith",
            "price":"1.400.000",
            "image":"./images/blog-13.jpg",
            "brand":"adidas",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023582358,
            "name":"Adidas SUPERSTAR W",
            "price":"4.300.000",
            "image":"./images/blog-16.jpg",
            "brand":"adidas",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":1109760050951,
            "name":"Converse Cons Mi Gente CX Hi-Top ",
            "price":"2.100.000",
            "image":"./images/blog-38.jpg",
            "brand":"converse",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":512840079125,
            "name":"Nike Air Jordan 11 Retro",
            "price":"3.000.000",
            "image":"./images/blog-7.jpg",
            "brand":"nike",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising.",
            "createdAt":"20/11/2021"
        },
        {
            "id":512840023125,
            "name":"Nike Air Vapormax 2021 FK",
            "price":"2.000.000",
            "image":"./images/blog-8.jpg",
            "brand":"nike",
            "description":"This is a beautiful shoes suitable for exercise. In addition, these shoes are very durable, not easily damaged when exercising",
            "createdAt":"20/11/2021"
        },
        {
            "id":122840023125,
            "name":"Nike Blazer '77",
            "price":"2.100.000",
            "image":"./images/blog-9.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":122840023125,
            "name":"LeBron Witness 6",
            "price":"5.000.000",
            "image":"./images/blog-10.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587358,
            "name":"Adidas Forum 84 Hi Marvel",
            "price":"8.560.000",
            "image":"./images/blog-11.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023587359,
            "name":"Adidas UltraBoost 21",
            "price":"5.900.000",
            "image":"./images/blog-12.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"2021-11-03T12:45:00.596Z"
        },
        {
            "id":342323587358,
            "name":"Adidas Superstar",
            "price":"3.200.000",
            "image":"./images/blog-17.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349028787358,
            "name":"Adidas Ultrarange Exo Carbon",
            "price":"9.000.000",
            "image":"./images/blog-18.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1099768650121,
            "name":"Converse Chuck Taylor All Star CX Create Next Comfort",
            "price":"6.000.000",
            "image":"./images/blog-33.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1009738650151,
            "name":"Converse Chuck Taylor All Star CX Create Next Comfort",
            "price":"4.500.000",
            "image":"./images/blog-35.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349028787358,
            "name":"ADIDAS ULTRABOOST DNA X LEGO® COLORS",
            "price":"3.900.000",
            "image":"./images/blog-20.jpg",
            "brand":"adidas",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349073587358,
            "name":"Vans Men's White Classic Slip-on Black",
            "price":"5.200.000",
            "image":"./images/blog-21.jpg",
            "brand":"vans",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":349023583758,
            "name":"Vans Old Skool Platform Pastel",
            "price":"8.100.000",
            "image":"./images/blog-22.jpg",
            "brand":"vans",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":3490200587358,
            "name":"Vans Old Skool Sneakers - Blue",       
            "price":"4.900.000",
            "image":"./images/blog-23.jpg",
            "brand":"vans",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1009738651121,
            "name":"Converse Black Chuck 70 Hi Sneakers",
            "price":"5.500.000",
            "image":"./images/blog-31.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1275979804086,
            "name":"Nike RevolutionNike",
            "price":"4.300.000",
            "image":"./images/blog-2.jpg",
            "brand":"nike",
            "description":"giay rat dep",
            "createdAt":"20/11/2021"
        },
        {
            "id":509844779795,
            "name":"Nike Air Max",
            "price":"3.000.000",
            "image":"./images/blog-3.jpg",
            "brand":"nike",
            "description":"Giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":2079738651121,
            "name":"Converse Black Chuck Sneakers",
            "price":"5.200.000",
            "image":"./images/blog-32.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":2109738650951,
            "name":"Converse Chuck 70 Great Next Purpose: Mi Gente Low Top",
            "price":"2.100.000",
            "image":"./images/blog-36.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":3209767650951,
            "name":"Converse Cons Weapon CX Hi-Top [Limited Edition]",
            "price":"2.000.000",
            "image":"./images/blog-37.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id":1191760350951,
            "name":"Converse Cons Mi Gente Taylor All Star",
            "price":"3.000.000",
            "image":"./images/blog-39.jpg",
            "brand":"converse",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id": 3512360350951,
            "name": "Nike Air Force 1",
            "price": "1.750.000",
            "image": "./images/blog-41.jpg",
            "brand":"nike",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id": 3512360314995,
            "name": "Air Force 1 Crater",
            "price": "2.750.000",
            "image": "./images/blog-42.jpg",
            "brand":"nike",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        },
        {
            "id": 3512877654995,
            "name": "Nike Air Force 1 Shadow",
            "price": "2.550.000",
            "image": "./images/blog-43.jpg",
            "brand":"nike",
            "description":"giày rất đẹp",
            "createdAt":"20/11/2021"
        }
    ]
    

    localStorage.setItem('products', JSON.stringify(products));
}
createProduct();
const state = {
    'products': () => { return JSON.parse(localStorage.getItem('products')) },
    'page': 1,
    'rows': 10
}

function pagination(products, page, rows) {
    let start = (page - 1) * rows;
    let end = start + rows;
    let data = products.slice(start, end);
    
    let pages = Math.ceil(products.length / rows);

    return {
        'products': data,
        'pages': pages
    }
}

function handlePageButtons(pages, products) {
    const wrapper = document.querySelector('.pagination-wrapper');
    wrapper.innerHTML = '';

    if(pages <= 1) return;

    for(let page = 1; page <= pages; page++) {
        wrapper.innerHTML += `<button value="${page}" class="number-page number-${page}">${page}</button>`;
        if(page == 1 && state.page == 1) 
        wrapper.innerHTML = `<button value="${page}" class="number-page number-${page} active">${page}</button>`;
    }
    const pageButtons = document.querySelectorAll('.number-page');
    pageButtons.forEach(pageButton => {
        pageButton.onclick = function() {
            pageButtons.forEach(pageButton => {
                pageButton.classList.remove('active');
            });

            document.querySelector('.product-item').innerHTML = '';
            state.page = this.value;
            
            pageButton.classList.add('active');
            
            displayProducts(products);
            displayDetail();

            document.querySelector(`.number-${state.page}`).classList.add('active');
        }
    })
}

const displayProducts = (products) => {
    const productItem = document.querySelector('.product-item');
    const data = pagination(products, state.page, state.rows);
    const newProducts = data.products;

    let html = '';
    if(newProducts.length > 0) {
        newProducts.forEach(product => {
            html += `
                <div class="product-box" data-id="${product.id}">
                    <img class="product-image" src="${product.image}" alt="${product.name}" data-id="${product.id}">
                    <div class="product-info">
                        <span>${product.name}</span>
                        <span>${product.price} đ</span>
                    </div>
                    <button class="button-add" data-id="${product.id}" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            `
        });
    } else 
        html += `<div class="no-item">Can't find the product you want</div>`
    productItem.innerHTML = html;
    handlePageButtons(data.pages, products);
}

const displayDetail = () => {
    const productPopup = document.querySelector('.product-popup');
    const productImg = document.querySelectorAll('.product-image');

    productImg.forEach(item => {
        item.onclick = function() {
            const id = this.getAttribute('data-id');
            const products = JSON.parse(localStorage.getItem('products'));
            const product = products.find(product => product.id == id);
            productPopup.innerHTML = `
                <div class="product-popup-wrapper">
                    <div class="close-detail-product">
                        <i class="ri-close-line btn-close" onclick="
                            (function() {
                                closePopup();
                            })();
                        "></i>
                    </div>
                    <div class="product-detail">
                        <div class="product-detail-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-detail-content">
                            <div class="product-detail-info">
                                <span class="product-detail-name">${product.name}</span>
                                <span class="product-detail-price">${product.price} đ</span>
                            </div>
                            <p class="product-detail-description">${product.description}</p>
                            <form class="cart">
                                <div class="quantity buttons-added" style="float: left; border: solid 1px rgba(0 0 0 / 30%);">
                                    <button type="button" class="minus" onclick="addCountToCart('-')">
                                        <i class="ri-subtract-fill"></i>
                                    </button>
                                    <input type="number" class="input-quantity" step="1" min="1" max name="quantity" value="1">
                                    <button type="button" class="plus" onclick="addCountToCart('+')">
                                        <i class="ri-add-fill"></i>
                                    </button>
                                </div>
                                <button type="button" class="add_to_cart" onclick="addCountToCart('add', ${product.id})">Add To Cart</button>
                            </form>
                            <div class="brand">
                                <span>Brand: </span>
                                <span>${product.brand}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `

            document.body.style.overflow = 'hidden';
            productPopup.style.display = 'block';
        }
    })
}

const displayCart = () => {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));
    const customers = JSON.parse(localStorage.getItem('user'));
    const cartPopup = document.querySelector('.cart-popup');
    const cartTotal = document.querySelector('.cart-total');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartNoItem = document.querySelector('.cart-noItem');
    const cartButton = document.querySelector('.cart-button');

    if(!loggedin) {
        cartPopup.innerHTML = '<div>Please login to view cart</div>';
        return;
    }

    const user = customers.find(customer => customer.id === loggedin.id);
    let totalPrice = 0;
    if(!user.cart.length) {
        cartTotal.style.display = 'none';
        cartWrapper.style.display = 'none';
        cartButton.style.display = 'none';
        cartNoItem.style.display = 'block';
        return;
    }

    cartTotal.style.display = 'flex';
    cartWrapper.style.display = 'block';
    cartButton.style.display = 'block';
    cartNoItem.style.display = 'none';

    let html = '';
    user.cart.forEach(cart => {
        html += `
            <div class="cart-item">
                <img src="${cart.image}" alt="${cart.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <span>${cart.name}</span>
                    <span>${cart.count} x ${cart.price} ₫</span>
                </div>
                <button onclick="removeFromCart(${cart.id})" class="delete-cart" data-id="${cart.id}"><i class="ri-delete-bin-line"></i></button>
            </div>`
        totalPrice += (cart.count * formattedPrice(cart.price));
    });

    cartWrapper.innerHTML = html;

    cartTotal.innerHTML = `
        <span>TOTAL: </span>
        <div class="total-horizontal"></div>
        <span>${totalPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'})}</span>
    `;
}

const closePopup = () => {
    document.body.style.overflow = 'initial';
    document.querySelector('.product-popup').style.display = 'none';
}

const addCountToCart = (char, id) => {
    let quantity = document.querySelector(".input-quantity");
    if (char == '-') {
        if (quantity.value > 0) quantity.value = Number(quantity.value) - 1;
    }
    else if (char == '+') {
        quantity.value = Number(quantity.value) + 1;
    }
    else {
        const loggedin = JSON.parse(localStorage.getItem('loggedin'));
        quantity = Number(quantity.value);

        if(!loggedin) {
            addAlert("Please login first to add to cart");
            return;
        }

        if (quantity <= 0 ) return;

        const product = state.products().find(product => product.id == id);
        const customers = JSON.parse(localStorage.getItem('user'));
        const index = customers.findIndex(customer => customer.id == loggedin.id);

        const indexProduct = customers[index].cart.findIndex(item => item.id == product.id);

        if (indexProduct != -1)
            customers[index].cart[indexProduct].count += quantity;
        else
            customers[index].cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                count: quantity,
                brand: product.brand,
            });
        localStorage.setItem('user', JSON.stringify(customers));
        addAlert("Add to cart successfully", "success");
        displayCart();
    }
}

function addToCart(id) {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));

    if(!loggedin) {
        addAlert("Please login first to add to cart");
        return;
    }
    
    const customers = JSON.parse(localStorage.getItem('user'));
    const product = state.products().find(product => product.id == id);
    const customer = customers.find(customer => customer.id == loggedin.id);

    const indexProduct = customer.cart.findIndex(item => item.id == product.id);

    if (indexProduct != -1) {
        customer.cart[indexProduct].count++;
    } else {
        customer.cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            count: 1
        });
    }
    localStorage.setItem('user', JSON.stringify(customers));
    addAlert("Add to cart successfully", "success");
    displayCart();
}
const removeFromCart = (id) => {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));

    if(loggedin) {
        const customers = JSON.parse(localStorage.getItem('user'));
        const index = customers.findIndex(customer => customer.id == loggedin.id);
        
        customers[index].cart = customers[index].cart.filter(cart => cart.id != id);

        localStorage.setItem('user', JSON.stringify(customers));
        displayCart();
    }
}

function searchProduct() {
    const search = document.querySelector('#search');
    
    search.oninput = function(e) {
        const products = state.products();
        const newProducts = products.filter(product => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
        displayProducts(newProducts);
        displayDetail();
    }
}

function searchByBrand(brand) {
    const products = JSON.parse(localStorage.getItem('products'));
    const newProducts = brand === "all" ? products : products.filter(product => {
        return product.brand.toLowerCase().includes(brand.toLowerCase());
    })
    state.products = () => { return newProducts };
    displayProducts(newProducts);
    displayDetail();
}

displayProducts(state.products());
displayDetail();
displayCart();
