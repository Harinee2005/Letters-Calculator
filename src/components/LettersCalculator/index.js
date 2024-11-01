import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  input = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input">
            <label htmlFor="getText" className="description">
              Enter the Phrase
            </label>
            <input
              onChange={this.input}
              id="getText"
              type="text"
              className="input-tag"
              placeholder="Enter the Phrase"
            />
          </div>
          <div className="bg-count">
            <p className="count">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
