// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  createNum = () => Math.ceil(Math.random() * 100)

  onClickBtn = () => {
    const randomNumber = this.createNum()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generateBtn"
            onClick={this.onClickBtn}
          >
            Generate
          </button>
          <p className="randomNumCount">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
