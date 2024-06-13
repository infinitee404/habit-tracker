import React, { createContext } from 'react'

const DateContext = createContext()

const DateProvider = ({ children }) => {
	const nowDate = new Date()

	return <DateContext.Provider value={{ nowDate }}>{children}</DateContext.Provider>
}

export { DateContext, DateProvider }
