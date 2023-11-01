import { useNavigate } from 'react-router-dom'

export const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate()
  const totalPrice = cart.length
    ? cart.reduce((acc, item) => {
        const subTotal = item.quantity * item.price
        acc += subTotal
        return acc
      }, 0)
    : parseFloat(0).toFixed(2)

  console.log(totalPrice)
  return (
    <div>
      <h2>Shopping Cart</h2>
      {!!cart.length ? (
        cart.map((item, idx) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <span style={{ marginRight: '4px' }}>Quantity: {item.quantity}</span>
              <button
                type="button"
                style={{ margin: '2px' }}
                onClick={() => {
                  const newCart = [...cart]
                  newCart[idx].quantity = newCart[idx].quantity - 1
                  setCart(newCart)
                  localStorage.setItem('cart', JSON.stringify(newCart))
                }}>
                -
              </button>
              <button
                type="button"
                style={{ margin: '2px' }}
                onClick={() => {
                  const newCart = [...cart]
                  newCart[idx].quantity = newCart[idx].quantity + 1
                  setCart(newCart)
                  localStorage.setItem('cart', JSON.stringify(newCart))
                }}>
                +
              </button>
              <p>Price Per Item: {item.price.toFixed(2)}</p>
              <p>Sub Total: {(item.price * item.quantity).toFixed(2)}</p>
              <button
                type="button"
                onClick={() => {
                  const { id } = item
                  const newCart = cart.filter((cItem) => cItem.id != id)
                  setCart(newCart)
                  localStorage.setItem('cart', JSON.stringify(newCart))
                }}>
                Remove
              </button>
              <hr />
              <h3>Total Price: {totalPrice.toFixed(2)}</h3>
              <button
                onClick={() => {
                  setCart([])
                  localStorage.setItem('cart', JSON.stringify([]))
                  alert('Thank you for shopping!')
                  navigate('/')
                }}>
                Check Out!
              </button>
            </div>
          )
        })
      ) : (
        <h4>Error: No data</h4>
      )}
    </div>
  )
}
