import { useEffect, useState,useReducer } from 'react'
import './App.css'

function App() {
  type Product = {
    id: number
    productName: string
    category: string
    brand: string
    price: number
    stockQty: number
    description: string
  }
  const [products, setProducts] = useState<Product[]>([])

  

  useEffect(() => {
    const loadProducts = async () => {
    try{
      const response = await fetch("https://localhost:7106/api/Product");
      
      const data = await response.json();

      setProducts(data)
    }
    catch(err){
      console.log(err);
    }
  };
    loadProducts();
  },[])

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started CI</h1>
          <p> Go for CD </p>
        {products.map((item) => (
        <p key={item.id}>{item.productName} | {item.brand}</p>
      ))}
        </div>   
      </section>
    </>
  )
}

export default App
