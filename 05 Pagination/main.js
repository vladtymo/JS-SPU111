// -------------------- send request to server
const apiUrl = 'https://dummyjson.com/products';

const pagination = {
    limit: 5,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    }
};

function generagePages(model) {
    
    const count = Math.ceil(model.total / model.limit);

    pageList.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        pageList.innerHTML += `<li class="page-item ${i == 1 ? "active" : ""}">
                                    <a class="page-link" href="#">${i}</a>
                                </li>`;
    }

}

async function getDataFromServer(url) {

    const urlWithParams = url += `?skip=${pagination.skip}&limit=${pagination.limit}`;
    // GET: path
    let response = await fetch(urlWithParams);

    console.log("Status:", response.status);
    
    const data = await response.json();
    
    pagination.total = data.total;
    pagination.next();

    generagePages(pagination);

    console.log(data);

    for (const i of data.products) {
        // <img height="45" src="${i.thumbnail}"/>
        userList.innerHTML += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    ${i.title}
                                    <span class="badge bg-primary rounded-pill">${i.price}$</span>
                                </li>`;

    }
}

getDataFromServer(apiUrl);

moreBtn.onclick = () => {
    getDataFromServer(apiUrl);

}