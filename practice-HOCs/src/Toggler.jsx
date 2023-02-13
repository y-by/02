import React, {Component} from "react"

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.on, this.toggle)}
      </div>
    )
  }
}

export default Toggler

