import React from 'react'

const Calendar = () => {
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	const nowDate = new Date()
	const monthName = nowDate.toLocaleString('default', { month: 'long' })
	const generateCalendar = () => {
		const rows = []
		for (let i = 0; i < 6; i++) {
			//6 rows for a full month
			const cells = []
			for (let j = 0; j < 7; j++) {
				// 7 columns for 7 days of the week
				cells.push(
					<td
						className='relative p-4 text-center text-4xl w-[calc(100%/7)] border'
						key={j}
					>
						<span className='absolute text-sm right-2 top-2'>{i * 7 + j + 1}</span>
						🔥
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
				<p className='text-2xl font-bold my-10'>{monthName}</p>
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
