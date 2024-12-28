import React, { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const BASKET = createContext(null);

function BasketContext({ children }) {
    const cook = new Cookies();

    // Basket state-ni Cookies-dən oxuyuruq və əgər boşdursa, boş massiv olaraq başlayırıq
    const [basket, setBasket] = useState(cook.get("basket") || []);

    // Səbətə element əlavə etmə funksiyası
    function addToBasket(id, img, name, price, discountedPrice, quantity, marka, sku, count) {
        if (!basket.some((item) => item.id === id)) {
            const newBasket = [
                ...basket,
                { id, img, name, price, discountedPrice, quantity, marka, sku, quantity: count || 1 }, // count düzgün dəyər olmalıdır
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
    
    

 // Miqdarı yeniləmək funksiyası
 function updateCount(index, newCount) {
    if (newCount <= 0) {
        // Miqdar 0 və ya daha az olduqda, məhsulu səbətdən silirik
        removeFromBasket(basket[index].id); // Burada məhsulun id-sini göndəririk
    } else {
        const updatedBasket = basket.map((item, i) =>
            i === index ? { ...item, quantity: newCount } : item
        );
        setBasket(updatedBasket);
        cook.set("basket", JSON.stringify(updatedBasket));
    }
}


// Məhsulu səbətdən silmək funksiyası
function removeFromBasket(id) {
    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
    cook.set("basket", JSON.stringify(updatedBasket));
}

    return (
        <BASKET.Provider
            value={{
                basket, // Səbət məlumatları
                setBasket, // Səbəti yeniləmək üçün
                addToBasket, // Məhsul əlavə etmək üçün
                removeFromBasket, // Məhsulu silmək üçün
                updateCount, // Məhsulun miqdarını yeniləmək üçün
            }}
        >
            {children}
        </BASKET.Provider>
    );
}

export default BasketContext;
