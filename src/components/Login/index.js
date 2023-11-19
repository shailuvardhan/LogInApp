import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="btn" onClick={login}>
      Login
    </button>
  )
}

export default Login
