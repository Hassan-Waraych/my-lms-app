import React, { useContext } from 'react'
import { AuthContext } from './LoginForm'
import DisplayStatus from './DisplayStatus'

const AuthMessage = () => {
  const { status } = useContext(AuthContext)
  return (
    <div>
      {status.message && <DisplayStatus type={status.type} message={status.message} />}
    </div>
  )
}

export default AuthMessage
