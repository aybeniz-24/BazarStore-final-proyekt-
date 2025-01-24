import React, { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const BASKET = createContext(null);

function BasketContext({ children }) {
    const cook = new Cookies();

    const [basket, setBasket] = useState(cook.get("basket") || []);

    function addToBasket(id, img, name, price, discountedPrice, quantity, marka, sku, count) {
        if (!basket.some((item) => item.id === id)) {
            const newBasket = [
                ...basket,
                { id, img, name, price, discountedPrice, quantity, marka, sku, quantity: count || 1 },
            ];
            setBasket(newBasket);
            cook.set("basket", JSON.stringify(newBasket));
        } else {
            const updatedBasket = basket.map((item) =>
                item.id === id ? { ...item, quantity: (item.quantity || 0) + (count || 1) } : item
            );
            setBasket(updatedBasket);
            cook.set("basket", JSON.stringify(updatedBasket));
        }
    }

    function updateCount(index, newCount) {
        if (newCount <= 0) {
            removeFromBasket(basket[index].id);
        } else {
            const updatedBasket = basket.map((item, i) =>
                i === index ? { ...item, quantity: newCount } : item
            );
            setBasket(updatedBasket);
            cook.set("basket", JSON.stringify(updatedBasket));
        }
    }

    function removeFromBasket(id) {
        const updatedBasket = basket.filter((item) => item.id !== id);
        setBasket(updatedBasket);
        cook.set("basket", JSON.stringify(updatedBasket));
    }

    return (
        <BASKET.Provider
            value={{
                basket,
                setBasket,
                addToBasket,
                removeFromBasket,
                updateCount,
            }}
        >
            {children}
        </BASKET.Provider>
    );
}

export default BasketContext;
