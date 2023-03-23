import useToggler from "./useToggler"

function Favorite(props) {
  const [isFavoriteed, toggle] =useToggler(false)

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>
          {isFavoriteed ? "❤️" : "♡"}
        </span>
      </h1>
    </div>
  )
}

export default Favorite