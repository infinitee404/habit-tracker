import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

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
	const [habitList, setHabitList] = useState(storedHabitList ? storedHabitList.split(',') : [])
	const [newHabit, setNewHabit] = useState('')
	const [addModalIsOpen, setAddModalIsOpen] = useState(false)
	const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false)
	const [confirmRemoveIsOpen, setConfirmRemoveIsOpen] = useState(false)

	const addHabit = () => {
		if (newHabit.length == 0) return
		habitList.push(newHabit)
		localStorage.setItem('habit-list', habitList)
		closeAddModal()
	}

	const removeHabit = (habitToRemove) => {
		console.log('remove habit:', habitToRemove)
		const updatedHabits = habitList.filter((habit) => habit != habitToRemove)
		setHabitList(updatedHabits)
		localStorage.setItem('habit-list', updatedHabits)
	}

	function closeAddModal() {
		setAddModalIsOpen(false)
		setNewHabit('')
	}

	return (
		<>
			<div className='h-full flex flex-col items-center'>
				<p className='font-cursive text-5xl my-10'>Habit Tracker</p>
				<div className='mb-8 flex max-h-[35.25rem] overflow-y-auto scroll-y'>
					<div className='container mx-auto p-2'>
						<div className='grid grid-cols-8 border border-gray-600'>
							{/* Header Row */}
							<div className='font-bold border border-gray-600 p-2'>Habits</div>
							{daysOfWeek.map((day, index) => (
								<div
									className='font-bold border border-gray-600 p-2'
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
											className='border border-gray-600 p-2'
											key={`${rowIndex}-${colIndex}`}
										></div>
									))}
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
				<div className='flex gap-4'>
					<button
						onClick={() => setAddModalIsOpen(true)}
						className='bg-green-600 font-bold px-8 py-4 rounded-lg'
					>
						Add a new habit
					</button>
					<button
						onClick={() => setRemoveModalIsOpen(true)}
						className='bg-red-600 font-bold px-8 py-4 rounded-lg'
					>
						Remove habit
					</button>
				</div>

				{/* Modal to Add new Habit */}
				<Modal
					isOpen={addModalIsOpen}
					onRequestClose={closeAddModal}
					style={modalStyles}
					contentLabel='Add Habit Modal'
				>
					<label htmlFor='habit-field'>
						<p className='text-xl text-center mb-4'>Add a Habit</p>
					</label>
					<input
						className='w-full p-2'
						type='text'
						id='habit-field'
						value={newHabit}
						onChange={(e) => setNewHabit(e.target.value)}
						placeholder='New Habit'
						autoComplete='off'
						autoFocus
					/>
					<button
						onClick={addHabit}
						className='bg-green-600 w-full p-2 mt-4'
					>
						Add
					</button>
					<button
						className='bg-red-600 w-full p-2 mt-4'
						onClick={closeAddModal}
					>
						Cancel
					</button>
				</Modal>

				{/* Modal to Remove an existing Habit */}
				<Modal
					isOpen={removeModalIsOpen}
					onRequestClose={() => setRemoveModalIsOpen(false)}
					style={modalStyles}
					contentLabel='Example Modal'
				>
					<p className='text-xl text-center'>Stop Tracking a Habit</p>
					<p className='text-sm text-center text-gray-500 font-light mb-4'>Click on a habit to stop tracking it.</p>
					<div className='flex flex-wrap gap-4'>
						{habitList.map((habits, index) => {
							return (
								<button
									className='bg-white p-2 text-black grow rounded'
									key={index}
									onClick={() => removeHabit(habits)}
								>
									{habits}
								</button>
							)
						})}
					</div>
					<button
						className='bg-red-600 w-full p-2 mt-4'
						onClick={() => setRemoveModalIsOpen(false)}
					>
						Cancel
					</button>
				</Modal>

				{/* Remove Habit Confirmation */}

				<Modal
					isOpen={confirmRemoveIsOpen}
					onRequestClose={() => setConfirmRemoveIsOpen(false)}
					style={modalStyles}
					contentLabel='Remove Modal'
				>
					<p className='text-center'>Confirm Removal</p>
					<p className='text-xl text-center'>Stop Tracking {}</p>
					<button
						className='bg-red-600 w-full p-2 mt-4'
						onClick={() => setConfirmRemoveIsOpen(false)}
					>
						Yes, Stop tracking
					</button>
					<button
						className='bg-green-600 w-full p-2 mt-4'
						onClick={() => setConfirmRemoveIsOpen(false)}
					>
						No, Keep tracking
					</button>
				</Modal>
			</div>
		</>
	)
}

export default Habit
