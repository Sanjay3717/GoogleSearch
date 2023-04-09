// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeStatus = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="search-input-suggestion">
            <div className="search-tab">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon-image"
              />

              <input
                type="search"
                className="search-style"
                placeholder="Search Google"
                alt="search icon"
                value={searchInput}
                onChange={this.onChangeStatus}
              />
            </div>
            <ul className="output-list-container">
              {searchResults.map(eachItem => (
                <SuggestionItem key={eachItem.id} suggestionsList={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
