import PropTypes from "prop-types"

export default function TextInput({ id, label }) {
  const inputId = `text-input-${id}`
  return (
    <div>
      <label id={`text-input-${id}-label`} htmlFor={inputId}>
        {label}
      </label>
      <input id={inputId} />
    </div>
  )
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}
