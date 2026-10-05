function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! We will reply soon.')
  }

  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <p>123 Coffee Street, Dhaka | hello@beancafe.example</p>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" rows="4" required />
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  )
}

export default Contact