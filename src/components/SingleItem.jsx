import { useNavigate } from 'react-router-dom'

export default function SingleItem({ item }) {
  const navigate = useNavigate()

  return (
    <div className="product-card" key={item.id}>
      <div className="product-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="product-info">
        <h3>{item.title}</h3>
        <h3>{item.price} USD</h3>
        <button onClick={() => navigate('/View/' + item.id)}>View Details</button>
      </div>
    </div>
  )
}
