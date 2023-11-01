import { useState, useEffect } from 'react'
import SingleItem from './SingleItem'

export const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const results = await response.json()
        setProducts(results)
      } catch (err) {
        console.error(err)
      }
    }
    getAllData()
  }, [])

  const updateFilter = (e) => {}

  const updateSort = (e) => {}

  return (
    <>
      <nav className="product-filter">
        <h1>Products</h1>
        <div className="sort">
          <div className="collection-sort" id="divFilterby">
            <label>Filter by:</label>
            <select
              defaultValue={'/'}
              id="selectFilterby"
              name="selectFilterby"
              onChange={(e) => updateFilter(e.target.value)}>
              <option value="/">All Items</option>
              <option value="/women">Women's Clothing</option>
              <option value="/men">Men's Clothing</option>
            </select>
          </div>
          <div className="collection-sort" id="divSortby">
            <label>Sort by:</label>
            <select
              defaultValue={'featured'}
              id="selectSortby"
              name="selectSortby"
              onChange={(e) => updateSort(e.target.value)}>
              <option value="/featured">Featured</option>
              <option value="/price_09">Price: Low to High</option>
              <option value="/price_90">Price: High to Low</option>
              <option value="/best_sellers">Best Sellers</option>
            </select>
          </div>
        </div>
      </nav>
      <section className="products">
        {products.length &&
          products.map((item, i) => {
            if (item.category == "men's clothing" || item.category == "women's clothing")
              return <SingleItem item={item} key={i} />
          })}
      </section>
      <p>&nbsp;</p>
    </>
  )
}
