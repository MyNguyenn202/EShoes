const loggedin = JSON.parse(localStorage.getItem('loggedin'));

function displayViewCheckout() {
    const viewOrder = document.querySelector('.checkout-product');
    
    if(viewOrder) {
        const customers = JSON.parse(localStorage.getItem('user'));
        const customer = customers.find(customer => customer.id == loggedin.id);
        let html = '';
        let price = 0, totalPrice = 0;
        customer.cart.forEach(product => {
            price = parseInt(product.count) * formattedPrice(product.price);
            totalPrice += price;
            html += `<tr>
                <td>${product.name} x ${product.count}</td>
                <td>${price.toLocaleString('vi', {style: 'currency', currency: 'VND'})}</td>
            </tr>`
        });
        html += `<tr>
            <td>Total: </td>
            <td>${totalPrice.toLocaleString('vi', {style: 'currency', currency: 'VND'})}</td>
        </tr>`
        viewOrder.innerHTML = html;
    }

}

function order(e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if(!phone || !address) {
        addAlert('One field is required');
        return;
    }
    if(!phone.length === 10 || isNaN(phone)) {
        addAlert('Phone number is not valid');
        return;
    }

    const customers = JSON.parse(localStorage.getItem('user'));
    const customer = customers.find(customer => customer.id == loggedin.id);

    customer.phone = phone;
    customer.address = address;

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    const id = Math.floor(new Date().valueOf() * Math.random());

    orders.push({
        id: id,
        customerId: customer.id,
        phone: customer.phone,
        address: customer.address,
        products: customer.cart,
        status: false,
        subtotal: totalPrice()
    })

    customer.cart = [];
    
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('user', JSON.stringify(customers));

    window.location.href = 'order.html';
}

function displayOrder() {
    const orderTable = document.querySelector('.order-product');

    const orders = JSON.parse(localStorage.getItem('orders'));
    let html = '';
    
    orders.forEach(order => {
        if(order.customerId == loggedin.id) {
            let s = '';
            order.products.forEach(product => s += `${product.name} x ${product.count} | `);
            html += `<tr>
                <td>${s}</td>
                <td>${order.subtotal.toLocaleString('vi', {style: 'currency', currency: 'VND'})}</td>
                <td>${order.address}</td>
                <td>${!order.status ? 'In Process' : 'Completed'}</td>
            </tr>`
        }
    })

    if(html === '') html += `<tr>
        <td colspan="10 " style="text-align: center;">You have no order yet</td>
    </tr>`

    orderTable.innerHTML = html;
}

const formOrder = document.querySelector('#form-order');
formOrder?.addEventListener('submit', order);

displayViewCheckout();
displayOrder();