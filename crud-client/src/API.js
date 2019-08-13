// const API_PRODUCTS = 'https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db';
const exactProductsURL=["laptops","iphone"];
const API_PRODUCTS = "http://localhost:3000/";
// export function getAllProducts() {
//     return fetch("http://localhost:3000/laptops")
//         .then(res => res.json())
// };

export async function getAllProducts() 
{
  let result = {};
  return await Promise.all(exactProductsURL.map(async (url)=> {
    let response = await fetch(`${API_PRODUCTS}${url}`);
    let data = await response.json();
    result[data[0].Type] = Object.assign({},data)
  }))
}


export function findById(o, id) {
    if (o.id === id) {
        return o;
    }
    var result, p;
    for (p in o) {
        if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
            result = findById(o[p], id);
            if (result) {
                return result;
            }
        }
    }
    return result;
}
export function createProduct(product) {
    return fetch(`${API_PRODUCTS}/:${product.Type}/`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': "application/json"
        }
    }).then((res) => res.json());
}