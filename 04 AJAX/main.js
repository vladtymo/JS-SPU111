// -------------------- send request to server
const url = 'https://dummyjson.com/products?limit=22';

async function getDataFromServer(url) {
    // GET: path
    let response = await fetch(url);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);

    for (const i of data.products) {
        // <img height="45" src="${i.thumbnail}"/>
        userList.innerHTML += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    ${i.title}
                                    <span class="badge bg-primary rounded-pill">${i.price}$</span>
                                </li>`;

    }
}

getDataFromServer(url);