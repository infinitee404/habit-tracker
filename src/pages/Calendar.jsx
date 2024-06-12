import React from 'react'

const Calendar = () => {
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	const generateCalendar = () => {
		const rows = []
		for (let i = 0; i < 6; i++) {
			//6 rows for a full month
			const cells = []
			for (let j = 0; j < 7; j++) {
				// 7 columns for 7 days of the week
				cells.push(
					<td
						className='p-4 w-[calc(100%/7)]'
						key={j}
					>
						a
					</td>
				)
			}
			rows.push(<tr key={i}>{cells}</tr>)
		}
		return rows
	}
	return (
		<>
			<div className='relative h-full flex flex-col justify-center items-center'>
				<p className='absolute top-10 font-cursive text-5xl'>Calendar View</p>
				<div className='max-w-[1260px] overflow-x-auto'>
					<table className='w-full'>
						<thead>
							<tr>
								{daysOfWeek.map((day, index) => (
									<th key={index}>{day}</th>
								))}
							</tr>
						</thead>
						<tbody>{generateCalendar()}</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Calendar
