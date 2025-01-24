
async function OnlineOrder(){
    const data = await fetch("http://localhost:3005/OnlineOrderExclusive")
    return data.json()
}
export {
    OnlineOrder
}


async function NewYear(){
    const data = await fetch("http://localhost:3005/NewYearGifts") 
    return data.json()   
}
export{
    NewYear
}


async function PineTree(){
    const data= await fetch("http://localhost:3005/PineTrees")
    return data.json()
}
export{
    PineTree
}


async function ProductMeats(){
    const data = await fetch("http://localhost:3005/ProductMeat")
    return data.json()
}
export{
    ProductMeats
}


async function ProductType(){
    const data = await fetch("http://localhost:3005/ProductTypes")
    return data.json()
}
export{
    ProductType
}


async function blogData(){
    const data = await fetch("http://localhost:3005/blogData")
    return data.json()
}
export{
    blogData
}


async function newsData(){
    const data = await fetch("http://localhost:3005/newsData")
    return data.json()
}
export{
    newsData
}



async function getAllDiscount(){
    const data = await fetch("http://localhost:3005/OnlineOrderExclusive")
    return data.json()
}
export {
    getAllDiscount
}




import axiosInstance from "./intances"

async function getAllCategories() {
  const res = await axiosInstance.get("/categories")
  return res.data
}

async function getAllProducts() {
  const res = await axiosInstance.get("/products")
  return res.data
}

async function getDiscounted() {
  const res = await axiosInstance.get('/products/discounted')
  return res.data
}
async function getProductsBySubId(id, page = 1, limit) {
  const res = await axiosInstance.get(`/products/subcategory/${id}?page=${page}&limit=${limit}`)
  return res.data
}
async function getDetailById(id) {
  const res = await axiosInstance.get(`/products/${id}`)
  return res.data
}

export { getAllCategories, getAllProducts, getDiscounted, getProductsBySubId, getDetailById }


