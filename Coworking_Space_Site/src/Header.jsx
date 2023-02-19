import burger from "./assets/burger.png"

export default function Header() {
  return (
    <header className="container">
    <nav>
      <ul>
        <li className="logo">
          <a href="#">
            WeBarelyWork 📍
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon mobile-menu" src={burger} alt="this is the menu, click to open" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}