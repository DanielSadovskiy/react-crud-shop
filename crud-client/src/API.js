// const API_PRODUCTS = 'https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db';
const exactProductsURL=["laptops","iphone"];
const API_PRODUCTS = "http://localhost:3000/";
// export function getAllProducts() {
//     return fetch("http://localhost:3000/laptops")
//         .then(res => res.json())
// };

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
// export function getAllProducts() 
// {
//   let result = {};
//   return Promise.all(exactProductsURL.map(async (url)=> {
//     let response = await fetch(${API_PRODUCTS}${url});
//     let data = response.json();
//     return data;
//   })).then((jsonURLs)=>{
//       jsonURLs.forEach((jsonurl)=>{
//           result[jsonurl[0].Type] = Object.values(jsonurl);
//           console.log(result);
//       })
//       return result;
//   })
// }



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