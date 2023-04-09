// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, updateSearchInput} = props
  const {suggestion} = suggestionsList
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p>{suggestion}</p>
      <button
        type="button"
        className="button-style"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
