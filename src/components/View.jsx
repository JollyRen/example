import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const View = ({ cart, setCart }) => {
  console.log(cart)
  let { id } = useParams()

  const [item, setItem] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const [cartItem] = cart.filter((item) => item.id == id)
  const isInCart = !!cartItem?.id
  console.log(isInCart)

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/' + id)
        const result = await response.json()
        setItem(result)
      } catch (err) {
        console.error(err)
      }
    }
    getSingleData()
  }, [])

  if (item?.id) {
    return (
      <div>
        <h2>{item.title}</h2>
        <h3>Price: {item.price} USD</h3>
        {isInCart ? (
          <span style={{ marginRight: '4px' }}>Quantity: {cartItem.quantity}</span>
        ) : (
          <form>
            <label style={{ color: 'black' }} htmlFor="count" className="label">
              Quantity:
            </label>
            <input
              name="count"
              type="number"
              id="count"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </form>
        )}
        <button
          type="button"
          onClick={() => {
            if (!isInCart) {
              console.log('adding to cart')
              const newCart = [...cart, { ...item, quantity }]
              setCart(newCart)
              localStorage.setItem('cart', JSON.stringify(newCart))
            } else {
              const newCart = cart.filter((item) => item.id != id)
              setCart(newCart)
              localStorage.setItem('cart', JSON.stringify(newCart))
            }
          }}>
          {isInCart ? 'Remove' : 'Add to Cart'}
        </button>
        <h4>Rating: {item.rating.rate} stars</h4>
        <h4>Category: {item.category}</h4>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} />
      </div>
    )
  } else {
    return (
      <div>
        <h3>Error: No data</h3>
      </div>
    )
  }
}
