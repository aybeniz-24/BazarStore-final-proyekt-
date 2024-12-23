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

    
  return (
    <FAVORIT.Provider
        value={{
            favorites, setFavorites,  addToFavorit
        }}
    >
        {children}
    </FAVORIT.Provider>
  )
}

export default FavoritContext