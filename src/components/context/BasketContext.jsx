import React, { createContext, useState } from 'react'
import { Cookies } from 'react-cookie'


export const BASKET = createContext(null)

function BasketContext( {children} ) {
    const cook = new Cookies()

    const [ basket, setBasket ] = useState( cook.get("basket") || [] )
    function addToBasket(id, img,  name, price,  discountedPrice,  quantity, marka, sku ){
        setBasket([...basket, {
            id, img,  name, price,  discountedPrice,  quantity, marka, sku
        }])
        cook.set( "basket", JSON.stringify(basket))
    }


   return (
    <BASKET.Provider 
        value={{
            basket, setBasket, addToBasket
        }}
    >
        {children}
    </BASKET.Provider>
  )
}

export default BasketContext