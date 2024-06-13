import React, { useState } from 'react'
import { BiChevronLeftSquare, BiChevronRightSquare } from 'react-icons/bi'

const nowDate = new Date()
const Calendar = () => {
	const [month, setMonth] = useState(nowDate.getMonth())

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

	const monthName = months[month]
	const firstDayOfMonth = new Date(nowDate.getFullYear(), month, 1) // Get the first day of the month
	const monthStartDay = firstDayOfMonth.getDay() // Get the day of the week for the first day of the month

	const changeMonth = (value) => {
		setMonth((prevMonth) => {
			let newMonth = (prevMonth + value) % 12
			if (newMonth < 0) return 11
			return newMonth
		})
	}

	const generateCalendar = () => {
		const rows = []
		const daysInMonth = new Date(nowDate.getFullYear(), month + 1, 0).getDate() // Calculate the total number of days in the current month
		const numWeeks = Math.ceil((daysInMonth + monthStartDay) / 7)

		for (let i = 0; i < numWeeks; i++) {
			const cells = []
			for (let j = 0; j < 7; j++) {
				const dayOfMonth = i * 7 + j + 1 - monthStartDay
				const isWithinMonth = dayOfMonth > 0 && dayOfMonth <= daysInMonth
				cells.push(
					<td
						className='relative p-4 text-center text-4xl w-[calc(100%/7)] border h-[75px]'
						key={j}
					>
						<span className='absolute text-sm right-2 top-2'>
							{isWithinMonth ? (
								dayOfMonth === nowDate.getDate() && month === nowDate.getMonth() ? (
									<span className='bg-blue-300 px-1 text-black rounded-xl '>{dayOfMonth}</span>
								) : (
									dayOfMonth
								)
							) : (
								''
							)}
						</span>
						{month < nowDate.getMonth()
							? isWithinMonth && '🔥' // If the month is in the past, all days will have the fire emoji
							: month > nowDate.getMonth()
							? '' // If the month is in the future, no days will have the fire emoji
							: // If the month is the current month, show fire emoji only for past days
							isWithinMonth && dayOfMonth <= nowDate.getDate()
							? '🔥'
							: ''}
					</td>
				)
			}
			rows.push(<tr key={i}>{cells}</tr>)
		}
		return rows
	}

	return (
		<>
			<div className='h-full flex flex-col items-center'>
				<p className='font-cursive text-5xl my-10'>Calendar View</p>

				<p className='text-2xl font-bold my-10 flex items-center gap-4'>
					<button onClick={() => changeMonth(-1)}>
						<BiChevronLeftSquare />
					</button>
					{monthName}
					<button onClick={() => changeMonth(1)}>
						<BiChevronRightSquare />
					</button>
				</p>
				<table className='w-full'>
					<thead>
						<tr>
							{daysOfWeek.map((day, index) => (
								<th
									className='font-bold text-2xl border'
									key={index}
								>
									{day}
								</th>
							))}
						</tr>
					</thead>
					<tbody>{generateCalendar()}</tbody>
				</table>
			</div>
		</>
	)
}

export default Calendar
