import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button type="button" className="btn" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
