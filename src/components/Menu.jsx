const items = [
  { name: 'Espresso', price: '$3.00' },
  { name: 'Cappuccino', price: '$4.50' },
  { name: 'Cold Brew', price: '$4.00' },
  { name: 'Croissant', price: '$3.50' },
]

function Menu() {
  return (
    <section id="menu" className="section menu">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {items.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <strong>{item.price}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Menu