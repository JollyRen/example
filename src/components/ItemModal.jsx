export default function ItemModal({ item, onClose }) {
  return (
    <div className="modal">
      <h2>{item.title}</h2>
      <h3>{item.description}</h3>
      <h4>Category: {item.category}</h4>
      <p>Price: {item.price} USD</p>
      <img src="{item.image}" alt="{item.title}" />

      <button onClick={onClose}>Close</button>
    </div>
  )
}
