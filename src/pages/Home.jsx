import React, { useEffect, useState } from 'react'

const getStreak = () => {
	const storedStreak = localStorage.getItem('streakValue')
	const parsedSteak = parseInt(storedStreak, 10) // 10 here is base(radix) so, parseInt in base 10.
	return isNaN(parsedSteak) ? 0 : parsedSteak
}
const Home = () => {
	const [streak, setStreak] = useState(getStreak())
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
				<p>
					Current streak: {streak} <span className={streak === 0 ? `opacity-0` : 'opacity-100'}>🔥</span>
				</p>
				<p>Add graphs here</p>
				<p>Add random quotes here</p>

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
