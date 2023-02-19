import hygge from "./assets/hygge.jpg"
import skyGarden from "./assets/sky-garden.jpg"
import generator from "./assets/generator.jpg"

export default function List() {
  return (
    <div className="list">
      <section className="item">
        <img src={hygge} className="item-img" alt="A smart coworking space" />
        <div className="caption">
          <p>Skiving in Scandinavia? Relax with a latte at Hygge Lounge.</p>
          <button className="book-btn">Book</button>
        </div>
        <label htmlFor="item" className="label">Exclusive</label>
      </section> 
      
      <section className="item">
        <img src={skyGarden} className="item-img" alt="A coworking space with plants" />
        <div className="caption">
          <p>Bored in Barcelona? Take a siesta at the Sky Garden.</p>
        </div>
      </section> 
      
      <section className="item">
        <img src={generator} className="item-img" alt="A comfortable coworking space" />
        <div className="caption">
          <p>Relaxing in Rio? Take some downtime at the Generator Hub.</p>
        </div>
      </section>
    </div>
  )
}