const reviews = [
  { name: 'Rafi', text: 'Best cappuccino in town!' },
  { name: 'Nusrat', text: 'Cozy place and friendly staff.' },
  { name: 'Tanvir', text: 'The croissants are always fresh.' },
]

function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <h2>What People Say</h2>
      <div className="review-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.name}>
            <p>"{r.text}"</p>
            <strong>- {r.name}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews