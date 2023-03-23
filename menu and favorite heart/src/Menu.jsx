import useToggler from "./useToggler"

function Menu() {
  const [show, toggle] = useToggler()

  return (
    <div>
      <button onClick={toggle}>{show ? "Hide" : "Show"} Menu</button>
      <nav style={{display: show ? "block" : "none"}}>
        <h6>Signed inas Coder123</h6>
        <p><a href="">Your Profile</a></p>
        <p><a href="">Your Repositories</a></p>
        <p><a href="">Your Stars</a></p>
        <p><a href="">Your Gist</a></p>
      </nav>
    </div>
  )
}

export default Menu