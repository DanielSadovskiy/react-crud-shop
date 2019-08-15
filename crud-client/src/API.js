// const API_PRODUCTS = 'https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db';
export const exactProductsURL=["laptop","iphone"];
const API_PRODUCTS = "http://localhost:3000/";
export function getProduct(category,id) {
    return fetch(`${API_PRODUCTS}${category}/${id}`)
        .then(res => res.json())
        
};

export const getAllProducts = () => {
   let result = {};
    return Promise.all(exactProductsURL.map(url=> 
    fetch(`${API_PRODUCTS}${url}`).then(response=>response.json())))
    .then(allProducts=>{
        allProducts.map((category)=>{
        result[category[0].Type] = Object.values(category);  
      })
      console.log(result);
      return result;
    })
}
export function createProduct(product) {
    return fetch(`${API_PRODUCTS}${product.Type}/`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': "application/json"
        }
    }).then(res=>res.json())
}
export function updateProduct(product) {
    return fetch(`${API_PRODUCTS}${product.Type}/${product.id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'content-type': "application/json"
        }
    }).then(res=>res.json())
}
export function deleteProduct(product) {
    return fetch(`${API_PRODUCTS}${product.Type}/${product.id}`, {
        method: 'DELETE',
        
    }).then(res=>res.json())
}