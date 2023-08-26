// ------ get page elements

const createBtn = document.querySelector('#create-btn');
const nameInput = document.querySelector('#nameInput');
const priceInput = document.querySelector('#priceInput');
const tableBody = document.querySelector('#product-table tbody');
const clearBtn = document.querySelector('#clear-btn');

// ------ set event handler
createBtn.onclick = (e) => {
    //alert("Clicked");

    let prod = new Product(nameInput.value, priceInput.value);
    console.log(prod);

    addProductToTable(prod);
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
}

function addProductToTable(product) {
    tableBody.innerHTML += `<tr>
                                <th scope="row">${product.id}</th>
                                <td>${product.name}</td>
                                <td>${product.price}$</td>
                            </tr>`;
}

class Product {
    static count = 10;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Product.count++;
    }
}