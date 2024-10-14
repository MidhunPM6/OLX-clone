import { createContext ,useState} from "react";

export const AuthContext=createContext(null)



export function ContextAuth({children}) {
    const[User,setUser]=useState(null)

  return (
  
    <AuthContext.Provider value={{User,setUser}}>
        {children}
    </AuthContext.Provider>
  
    
      
  )
}

export default ContextAuth
