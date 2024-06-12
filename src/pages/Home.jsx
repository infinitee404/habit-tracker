import React, { useEffect, useState } from 'react'

const Home = () => {
	const [streak, setStreak] = useState(0 || parseInt(localStorage.getItem('streakValue')))
	const manageStreak = () => {
		setStreak((prevCount) => prevCount + 1)
	}
	useEffect(() => {
		localStorage.setItem('streakValue', streak)
	}, [streak])
	return (
		<>
			<div className='h-full flex flex-col justify-center items-center'>
				<h1 className='font-cursive font-bold text-8xl tracking-wide'>Welcome back !</h1>
				<p>Let's get to tracking</p>
				<p>Current streak: {streak > 0 ? `${streak}🔥` : streak}</p>
				<button
					className='bg-yellow-500 p-4'
					onClick={manageStreak}
				>
					Click
				</button>
			</div>
		</>
	)
}

export default Home
