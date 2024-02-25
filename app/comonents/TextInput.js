import PropTypes from "prop-types"

export default function TextInput({ id }) {
  const inputId = `text-input-${id}`
  return (
    <div>
      <label id={`text-input-${id}-label`} htmlFor={inputId}>
        text input
      </label>
      <input id={inputId} />
    </div>
  )
}

TextInput.propTypes = {
  id: PropTypes.string,
}
