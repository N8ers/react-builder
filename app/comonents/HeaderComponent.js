import PropTypes from "prop-types"

function HeaderComponent({ headerMessage }) {
  return <h1>{headerMessage}!</h1>
}

HeaderComponent.propTypes = {
  headerMessage: PropTypes.string,
}
