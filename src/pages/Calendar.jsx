import React, { useState, useContext, useEffect } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { DateContext } from '../context/DateContext'

const Calendar = () => {
	const { nowDate } = useContext(DateContext)

	const [month, setMonth] = useState(nowDate.getMonth())
	const [year, setYear] = useState(nowDate.getFullYear())

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

	const monthName = months[month]
	const firstDayOfMonth = new Date(year, month, 1) // Get the first day of the month
	const monthStartDay = firstDayOfMonth.getDay() // Get the day of the week for the first day of the month

	const gotoToday = () => {
		setMonth(nowDate.getMonth())
		setYear(nowDate.getFullYear())
	}

	const changeMonth = (value) => {
		setMonth((prevMonth) => prevMonth + value)
	}

	useEffect(() => {
		if (month < 0) {
			setMonth(11)
			setYear((prevYear) => prevYear - 1)
		} else if (month > 11) {
			setMonth(0)
			setYear((prevYear) => prevYear + 1)
		}
	}, [month])

	const generateCalendar = () => {
		const rows = []
		const daysInMonth = new Date(year, month + 1, 0).getDate() // Calculate the total number of days in the current month
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
								dayOfMonth === nowDate.getDate() && month === nowDate.getMonth() && year === nowDate.getFullYear() ? (
									// To highlight current date
									<span className='bg-blue-300 px-1 text-black rounded-xl '>{dayOfMonth}</span>
								) : (
									dayOfMonth
								)
							) : (
								''
							)}
						</span>
						{year < nowDate.getFullYear() || (year === nowDate.getFullYear() && month < nowDate.getMonth())
							? isWithinMonth && '🔥' // If the date is in the past, all days will have the fire emoji
							: year > nowDate.getFullYear() || (year === nowDate.getFullYear() && month > nowDate.getMonth())
							? '' // If the date is in the future, no days will have the fire emoji
							: isWithinMonth && dayOfMonth <= nowDate.getDate()
							? '🔥' // If the month is the current month, show fire emoji only for past days
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

				<p className='relative w-full my-10 flex items-center justify-center gap-4 text-2xl font-bold'>
					{(month !== nowDate.getMonth() || year !== nowDate.getFullYear()) && (
						<button
							onClick={() => gotoToday()}
							className='bg-green-600 absolute h-full px-4 right-0 rounded-xl font-normal text-sm'
						>
							Go to Today
						</button>
					)}
					<button
						className='rounded h-full p-4'
						onClick={() => changeMonth(-1)}
					>
						<BiChevronLeft />
					</button>
					{monthName}, {year}
					<button
						className='rounded h-full p-4'
						onClick={() => changeMonth(1)}
					>
						<BiChevronRight />
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
