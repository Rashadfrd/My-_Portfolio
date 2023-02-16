import React,{ useContext, useState } from "react"

const AppContext = React.createContext()

const Provider = ({children})=>{
    const[sidebar, setSidebar] = useState(false)

    const data = {
        sidebar,
        setSidebar
    }
    return(
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}
export default Provider
export const useAppContext = () => {
    return useContext(AppContext)
}