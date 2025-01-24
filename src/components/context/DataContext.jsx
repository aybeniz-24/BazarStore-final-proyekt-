import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts, getDiscounted } from '../../services/api'

export const DATA = createContext(null)

function DataContext({ children }) {
  const [category, setCategory] = useState(null)
  const [data, setData] = useState(null)
  const [discounted, setDiscounted] = useState(null)


  useEffect(() => {
    getAllCategories().then(res => setCategory(res))
    getAllProducts().then(res => setData(res))
    getDiscounted().then(res => setDiscounted(res))
  }, [])


  return (
    <DATA.Provider value={{ category, setCategory, data, setData, discounted, setDiscounted }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext