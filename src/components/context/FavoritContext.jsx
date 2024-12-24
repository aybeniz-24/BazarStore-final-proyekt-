import { createContext, useState } from "react"
import { Cookies } from "react-cookie"

export const FAVORIT = createContext(null)

function FavoritContext( {children} ) {
     const cook = new Cookies()

    const [ favorites, setFavorites ] = useState( cook.get("favorites") || [] )
    
    function addToFavorit( id, img,  name, price,  discountedPrice,  quantity, marka, sku ){
        setFavorites( [...favorites, {
            id, img,  name, price,  discountedPrice,  quantity, marka, sku
        }])
        cook.set( "favorites", JSON.stringify(favorites))
    }


    function removeFromFavorit(id) {
        const updatedFavorites = favorites.filter((item) => item.id !== id);
        setFavorites(updatedFavorites);
        cook.set("favorites", JSON.stringify(updatedFavorites));
      }

    
  return (
    <FAVORIT.Provider
        value={{
            favorites, setFavorites,  addToFavorit, removeFromFavorit 
        }}
    >
        {children}
    </FAVORIT.Provider>
  )
}

export default FavoritContext