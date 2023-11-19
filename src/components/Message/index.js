import './index.css'

const Message = props => {
  const {isLogin} = props
  const message = isLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="msg">{message}</h1>
}
export default Message
