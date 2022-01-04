function displayCart() {
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
function addCountToCart(char, id) {
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

        const product = products.find(product => product.id == id);
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
                count: quantity
            });

        localStorage.setItem('user', JSON.stringify(customers));
        addAlert("Add to cart successfully", "success");
        displayCart();
    }
}

function removeFromCart(id) {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));

    if(loggedin) {
        const customers = JSON.parse(localStorage.getItem('user'));
        const index = customers.findIndex(customer => customer.id == loggedin.id);
        
        customers[index].cart = customers[index].cart.filter(cart => cart.id != id);

        localStorage.setItem('user', JSON.stringify(customers));
        displayCart();
        displayViewCart();
    }
}

function displayViewCart() {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));
    const customers = JSON.parse(localStorage.getItem('user'));
    const viewcartTable = document.querySelector('.viewcart-product');
    
    if(!loggedin) {
        viewcartTable.innerHTML = `<tr>
            <td colspan="6" height="50px" style="text-align: center;">Please login to view cart</td>
        </tr>`;
        return;
    }

    const customer = customers.find(customer => customer.id === loggedin.id);

    let html = '';
    if(customer) {
        if(customer.cart.length) {
            customer.cart.forEach((product, index) => {
                html += `<tr id="${product.id}">
                    <td class="td-image">
                        <img src="${product.image}" alt="">
                    </td>
                    <td>${product.name}</td>
                    <td>${product.price} ₫</td>
                    <td>
                        <form class="cart">
                            <div class="quantity buttons-added">
                                <button type="button" class="minus" onclick="minusQty(${product.id})">
                                    <i class="ri-subtract-fill"></i>
                                </button>
                                <input type="number" id="quantity-${product.id}" class="input-quantity" step="1" min="1" max name="quantity" value=${product.count}>
                                <button type="button" class="plus" onclick="plusQty(${product.id})">
                                    <i class="ri-add-fill"></i>
                                </button>
                            </div>
                        </form>
                    </td>
                    <td>${(parseInt(product.count) * formattedPrice(product.price)).toLocaleString('vi', {style: 'currency', currency: 'VND'})}</td>
                    <td class="td-action">
                        <button class="btn-delete" onclick="togglePopupDelete()">
                            <i class="ri-delete-bin-6-line"></i>
                        </button>
                        <div class="popup-delete-post">
                            <div class="delete-popup-content">
                                Do you want to delete this product?
                            </div>
                            <div class="btn-choose">
                                <button class="btn-yes" data-id="${product.id}">Yes</button>
                                <button class="btn-no">No</button>
                            </div>
                        </div>
                    </td>
                </tr>`
            });
        } else {
            html += `<tr>
                <td colspan="10 " style="text-align: center;">You have no product in cart</td>
            </tr>`
        }
        viewcartTable.innerHTML = html;
    }
}

function minusQty(id) {
    const quantity = document.getElementById("quantity-" + id);
    const btnUpdate = document.querySelector(".button-update");

    if (quantity.value == 1) return;
    quantity.value = Number(quantity.value) - 1;
    btnUpdate.disabled = false;
    btnUpdate.style.opacity = 1
}

function plusQty(id) {
    const quantity = document.getElementById("quantity-" + id);
    const btnUpdate = document.querySelector(".button-update");

    quantity.value = Number(quantity.value) + 1;
    btnUpdate.disabled = false;
    btnUpdate.style.opacity = 1
}

function updateCart() {
    const loggedin = JSON.parse(localStorage.getItem('loggedin'));
    
    const customers = JSON.parse(localStorage.getItem('user'));
    const customer = customers.find(customer => customer.id == loggedin.id);

    customer.cart.forEach(product => {
        let quantity = document.getElementById("quantity-" + product.id);
        product.count = quantity.value;
    })
    localStorage.setItem('user', JSON.stringify(customers));
    window.location.reload();
}

function totalPrice() {
    const viewcartPrice = document.querySelector('.viewcart-price');
    let totalPrice = 0;

    const loggedin = JSON.parse(localStorage.getItem('loggedin'));
    
    const customers = JSON.parse(localStorage.getItem('user'));
    const customer = customers.find(customer => customer.id == loggedin.id);

    customer.cart.forEach(product => {
        totalPrice += parseInt(product.count) * formattedPrice(product.price);
    })
    if(viewcartPrice) 
        viewcartPrice.innerHTML = "Total: " + totalPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'});
    return totalPrice;
}

function removeFromViewCart() {
    const deleteBtn = document.querySelectorAll('.btn-delete');
    const deletePopup = document.querySelectorAll('.popup-delete-post');
    const noBtn = document.querySelectorAll('.btn-no');
    const yesBtn = document.querySelectorAll('.btn-yes');

    const loggedin = JSON.parse(localStorage.getItem('loggedin'));

    deleteBtn.forEach((item, index) => {
        item.onclick = function() {
            deletePopup[index].classList.toggle('show');

            noBtn[index].onclick = () => deletePopup[index].classList.toggle('show');

            yesBtn[index].onclick = function() {
                const id = this.getAttribute('data-id');
                const customers = JSON.parse(localStorage.getItem('user'));
                const index = customers.findIndex(customer => customer.id == loggedin.id);
                
                customers[index].cart = customers[index].cart.filter(cart => cart.id != id);

                localStorage.setItem('user', JSON.stringify(customers));
                displayViewCart();
            }
        }
    })
}

displayCart();
displayViewCart();
totalPrice();
removeFromViewCart();