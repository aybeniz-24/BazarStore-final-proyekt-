import { createContext, useState } from "react"
import { Cookies } from "react-cookie"

export const BASKET = createContext(null)


function BasketContext( {children} ) {
  const cook = new Cookies()
  console.log(cook.get("basket"))
    
    const [ basket, setBasket ] = useState( cook.get("basket") || [] )
    function addToBasket( id, img,  price,  name, discountedPrice, quantity, marka, sku, count  ){
        setBasket([...basket, {
          id, img,  price,  name, discountedPrice, quantity, marka, sku, count
        }])
        cook.set("basket", JSON.stringify( basket ) )
    }
    console.log(cook.get("basket"));

    
  return (
    <BASKET.Provider value = {{ basket, setBasket, addToBasket }}>
        {children}
    </BASKET.Provider>
  )
}

export default BasketContext