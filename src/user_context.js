import React, { Component, createContext } from 'react'

export const UserContext = createContext(null);

// class UserProvider extends Component {
//   // Context state
//   state = {
//     user: 0,
//   }

//   // Method to update state
//   setUser = (user) => {
//     this.setState((prevState) => ({ user }))
//   }

//   render() {
//     const { children } = this.props
//     const { user } = this.state
//     const { setUser } = this

//     return (
//       <UserContext.Provider
//         value={{
//           user,
//           setUser,
//         }}
//       >
//         {children}
//       </UserContext.Provider>
//     )
//   }
// }



// export { UserProvider }