import React from 'react'

const Logout = () => {
    const logout = async (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        window.location.href = '/within'
    }

  return (
    <div>
        <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default Logout