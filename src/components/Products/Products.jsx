import axios from 'axios'
import React from 'react'

export default function Products() {

    
    let products= async function () { await axios.get("https://ecommerce.routemisr.com/api/v1/products")

    console.log(products) 
    }
    
  return (
    <div>
      <p>Products</p>
    </div>
  )
}
