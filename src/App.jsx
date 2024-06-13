import React, { createContext, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Comopnents
import Navbar from './components/Navbar'

// Route Pages
import Home from './pages/Home'
import Habits from './pages/Habits'
import Calendar from './pages/Calendar'

// Contexts
import { DateProvider } from './context/DateContext'

// Styles
import './App.css'

const App = () => {
	return (
		<>
			<DateProvider>
				<Router>
					<Navbar />
					<div className='pt-[82px] h-screen max-w-[1260px] mx-auto'>
						<Routes>
							<Route
								path='/'
								element={<Home />}
							/>
							<Route
								path='/habits'
								element={<Habits />}
							/>
							<Route
								path='/calendar'
								element={<Calendar />}
							/>
						</Routes>
					</div>
				</Router>
			</DateProvider>
		</>
	)
}

export default App
