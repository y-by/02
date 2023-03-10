import React from "react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
  state = {
    username: "bob12345"
  }

  changeUsername = (username) => {
    this.setState({username})
  }

  render() {
    const {username} = this.state
    return (
    <Provider value={{username: username, changeUsername: this.changeUsername}}>
      {this.props.children}
    </Provider>
    )
  }
}

export {UserContextProvider, Consumer as UserContextConsumer}