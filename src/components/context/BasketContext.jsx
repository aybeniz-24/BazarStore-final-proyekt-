import React, { createContext, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'


export const BASKET = createContext(null)

function BasketContext({ children }) {
    const cook = new Cookies()

    const [basket, setBasket] = useState(cook.get("basket") || [])

    /*     function addToBasket(id, img,  name, price,  discountedPrice,  quantity, marka, sku ){
            setBasket([...basket, {
                id, img,  name, price,  discountedPrice,  quantity, marka, sku
            }])
            cook.set( "basket", JSON.stringify(basket))
        } */
    function addToBasket(id, img, name, price, discountedPrice, quantity, marka, sku) {
        const existingProduct = basket.find((item) => item.id === id);

        if (existingProduct) {
            // Məhsul artıq səbətdədirsə, onun sayını artırın
            setBasket(
                basket.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            // Məhsul səbətdə yoxdursa, yeni olaraq əlavə edin
            setBasket([
                ...basket,
                { id, img, name, price, discountedPrice, quantity, marka, sku }
            ]);
        }
        cook.set("basket", JSON.stringify(basket));
    }



    const updateCount = (index, newCount) => {
        setBasket(basket.map((item, i) => i === index ? { ...item, quantity: newCount } : item));
    };




    function removeFromBasket(id) {
        const updatedBasket = basket.filter((item) => item.id !== id);
        setBasket(updatedBasket);
        // Yeni vəziyyətlə cook yeniləyin:
        setTimeout(() => {
            cook.set("basket", JSON.stringify(updatedBasket));
        }, 0);
    }

    useEffect(() => {
        cook.set("basket", JSON.stringify(basket));
    }, [basket]);

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