import {createContext, useState, useEffect} from 'react'

const context = createContext()

export const contextProvider = ({children}) =>{


    return (<context.Provider value={{

    }}>
        {children}
    </context.Provider>)
}

export default context