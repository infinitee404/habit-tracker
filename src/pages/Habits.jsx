import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'

import AddHabitModal from '../components/AddHabitModal'
import RemoveHabitModal from '../components/RemoveHabitModal'

import { DateContext } from '../context/DateContext'

Modal.setAppElement('#root')

const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		padding: '2rem',
		color: '#f1f1f1',
		minWidth: '400px',
		maxWidth: '260px',
		marginRight: '-50%',
		backgroundColor: '#353535',
		transform: 'translate(-50%, -50%)',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const storedHabitList = localStorage.getItem('habit-list')

const Habit = () => {
	const { nowDate } = useContext(DateContext)

	const [habitList, setHabitList] = useState(storedHabitList ? storedHabitList.split(',') : [])
	const [newHabit, setNewHabit] = useState('')
	const [addModalIsOpen, setAddModalIsOpen] = useState(false)
	const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false)
	const today = daysOfWeek[nowDate.getDay()]

	const done = '✔️'
	const undone = '❌'

	const addHabit = (habit) => {
		const updatedHabits = [...habitList, habit]
		setHabitList(updatedHabits)
		localStorage.setItem('habit-list', updatedHabits)
		setNewHabit('')
	}

	const removeHabit = (habitToRemove) => {
		const updatedHabits = habitList.filter((habit) => habit !== habitToRemove)
		setHabitList(updatedHabits)
		localStorage.setItem('habit-list', updatedHabits)
		if (updatedHabits.length === 0) {
			setRemoveModalIsOpen(false)
		}
	}

	const updateCheck = (event, habitName, col) => {
		if (daysOfWeek[col] === today) {
			if (event.target.innerText.length === 0) {
				event.target.innerText = done
			} else {
				event.target.innerText = ''
			}
		}
	}

	return (
		<>
			<div className='h-full flex flex-col items-center'>
				<p className='font-cursive text-5xl my-10'>Habit Tracker</p>
				<div className='mb-8 flex max-h-[35.25rem] overflow-y-auto scroll-y'>
					<div className='container mx-auto p-2'>
						<div
							className='grid'
							style={{ gridTemplateColumns: 'auto repeat(7, 4rem)' }}
						>
							{/* Header Row */}
							<div className='font-bold border border-gray-600 p-2'>Habits</div>
							{daysOfWeek.map((day, index) => (
								<div
									className={`border border-gray-600 p-2 ${today === day ? 'bg-[#f4d444] bg-opacity-70' : ''}`}
									key={index}
								>
									{day}
								</div>
							))}

							{/* Habit Rows */}
							{habitList.map((habit, rowIndex) => (
								<React.Fragment key={rowIndex}>
									<div className='font-bold border border-gray-600 p-2'>{habit}</div>
									{daysOfWeek.map((_, colIndex) => (
										<div
											onClick={(event) => updateCheck(event, habit, colIndex)}
											className={`border border-gray-500 p-2 flex justify-center cursor-default select-none ${
												colIndex === nowDate.getDay() && 'bg-[#f4d444] bg-opacity-70 hover:cursor-pointer'
											} `}
											key={`${rowIndex}-${colIndex}`}
										>
											{colIndex < nowDate.getDay() ? (Math.floor(Math.random() * 100) > 35 ? done : undone) : ''}
										</div>
									))}
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
				<div className='flex gap-4'>
					<button
						onClick={() => setAddModalIsOpen(true)}
						className='bg-green-600 text-white font-bold px-8 py-4 rounded-lg'
					>
						Add a new habit
					</button>
					<button
						onClick={() => setRemoveModalIsOpen(true)}
						className='bg-red-600 text-white font-bold px-8 py-4 rounded-lg'
					>
						Remove habit
					</button>
				</div>

				<AddHabitModal
					isOpen={addModalIsOpen}
					onRequestClose={() => setAddModalIsOpen(false)}
					onAddHabit={addHabit}
					newHabit={newHabit}
					setNewHabit={setNewHabit}
					styles={modalStyles}
				/>

				<RemoveHabitModal
					isOpen={removeModalIsOpen}
					onRequestClose={() => setRemoveModalIsOpen(false)}
					habitList={habitList}
					onRemoveHabit={removeHabit}
					styles={modalStyles}
				/>
			</div>
		</>
	)
}

export default Habit
