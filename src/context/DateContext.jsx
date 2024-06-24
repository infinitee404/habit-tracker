import React, { createContext } from 'react'

const DateContext = createContext()

const DateProvider = ({ children }) => {
	const nowDate = new Date()
    nowDate.setDate(22)
	return <DateContext.Provider value={{ nowDate }}>{children}</DateContext.Provider>
}

export { DateContext, DateProvider }
