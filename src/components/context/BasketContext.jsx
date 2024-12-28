import React, { createContext, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'


export const BASKET = createContext(null)

function BasketContext({ children }) {
    const cook = new Cookies()

    const [basket, setBasket] = useState(cook.get("basket") || [])

   
    function addToBasket(id, img, name, price, discountedPrice, quantity, marka, sku) {
        if (!basket.some((item) => item.id === id)) {
            const newBasket = [
                ...basket,
                { id, img, name, price, discountedPrice, quantity, marka, sku },
            ];
            setBasket(newBasket);
            cook.set("basket", JSON.stringify(newBasket)); // Yalnız yeni massiv saxlanılır
        }
    }





    const updateCount = (index, newCount) => {
        setBasket(basket.map((item, i) => i === index ? { ...item, quantity: newCount } : item));
    };




    function removeFromBasket(id) {
        const updatedBasket = basket.filter((item) => item.id !== id);
        setBasket(updatedBasket);
        cook.set("basket", JSON.stringify(updatedFavorites));
    }


    return (
        <BASKET.Provider
            value={{
                basket, setBasket, addToBasket, removeFromBasket, updateCount
            }}
        >
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext