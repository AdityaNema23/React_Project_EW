import { useEffect,useState } from "react"


const useGetSingleProdect = (productId) => {
    const[singleProduct,setSingleProduct] = useState(null)
    useEffect(()=>{
        fetchSingleProduct()
    }, [])

   const fetchSingleProduct = async ()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const jsonData = await data.json();
        setSingleProduct(jsonData);
    }
  return singleProduct
  
}

export default useGetSingleProdect