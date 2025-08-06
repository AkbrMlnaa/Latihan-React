import axios from "axios"

const getProducts = (callback) => {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
const getDetailProduct = (id, callback) => {
  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export { getProducts, getDetailProduct }
