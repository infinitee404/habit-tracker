import React, { useEffect, useState } from 'react'

import Quotes from '../assets/quotes'

const getStreak = () => {
	const storedStreak = localStorage.getItem('streakValue')
	const parsedSteak = parseInt(storedStreak, 10) // 10 here is base(radix) so, parseInt in base 10.
	return isNaN(parsedSteak) ? 0 : parsedSteak
}
const Home = () => {
	const [streak, setStreak] = useState(getStreak())
	const randomQuote = Math.floor(Math.random() * Quotes.length)
	console.log(randomQuote)
	const manageStreak = () => {
		setStreak((prevCount) => prevCount + 1)
	}
	useEffect(() => {
		localStorage.setItem('streakValue', streak)
	}, [streak])
	return (
		<>
			<div className='h-full flex flex-col items-center'>
				<h1 className='font-cursive font-bold text-8xl tracking-wide'>Welcome back !</h1>
				<p>
					Current streak: {streak} <span className={streak === 0 ? `opacity-0` : 'opacity-100'}>🔥</span>
				</p>
				<p className='border-2 border-gray-700 h-[63%] w-full'>Add graphs here</p>
				<q class="relative w-fit max-w-[63ch] mt-8 text-justify text-lg before:content-['\201C'] before:absolute before:-left-6 before:-top-3 before:text-6xl before:text-gray-500">
					{Quotes[randomQuote].quote}
				</q>
				<p className='w-full text-xl text-right'>- {Quotes[randomQuote].author}</p>
			</div>
		</>
	)
}

export default Home
