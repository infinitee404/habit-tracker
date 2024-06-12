import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const modalStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		maxWidth: '260px',
		marginRight: '-50%',
		padding: '2rem',
		minWidth: '400px',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#353535',
		color: '#f1f1f1',
	},
}

const storedHabitList = localStorage.getItem('habit-list')
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Habit = () => {
	const [habitList, setHabitList] = useState(storedHabitList ? storedHabitList.split(',') : [])
	const [newHabit, setNewHabit] = useState('')
	const [addModalIsOpen, setAddModalIsOpen] = useState(false)
	const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false)

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
	}
	function openAddModal() {
		setAddModalIsOpen(true)
	}

	function closeAddModal() {
		setAddModalIsOpen(false)
		setNewHabit('')
	}

	function openRemoveModal() {
		setRemoveModalIsOpen(true)
	}

	function closeRemoveModal() {
		setRemoveModalIsOpen(false)
	}

	return (
		<>
			<div className='h-full flex flex-col items-center'>
				<p className='font-cursive text-5xl mb-10'>Habit Tracker</p>
				<div className='bg-white text-black mb-8 flex max-h-[35.25rem] overflow-y-auto scroll-y'>
					<div className='container mx-auto p-2'>
						<div className='grid grid-cols-8 border border-black'>
							{/* Header Row */}
							<div className='font-bold border border-black p-2'>Habits</div>
							{daysOfWeek.map((day, index) => (
								<div
									className='font-bold border border-black p-2'
									key={index}
								>
									{day}
								</div>
							))}

							{/* Habit Rows */}
							{habitList.map((habit, rowIndex) => (
								<React.Fragment key={rowIndex}>
									<div className='font-bold border border-black p-2'>{habit}</div>
									{daysOfWeek.map((_, colIndex) => (
										<div
											className='border border-black p-2'
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
						onClick={openAddModal}
						className='bg-green-600 font-bold px-8 py-4 rounded-lg'
					>
						Add a new habit
					</button>
					<button
						onClick={openRemoveModal}
						className='bg-red-600 font-bold px-8 py-4 rounded-lg'
					>
						Remove habit
					</button>
				</div>
				<Modal
					isOpen={addModalIsOpen}
					onRequestClose={closeAddModal}
					style={modalStyles}
					contentLabel='Example Modal'
				>
					<label htmlFor='habit-field'>
						<p className='text-xl text-center mb-4'>Add a Habit</p>
					</label>
					<input
						className='w-full p-2'
						type='text'
						id='habit-field'
						value={newHabit}
						onChange={() => setNewHabit(event.target.value)}
						placeholder='New Habit'
						autoComplete='off'
						required
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
				<Modal
					isOpen={removeModalIsOpen}
					onRequestClose={closeRemoveModal}
					style={modalStyles}
					contentLabel='Example Modal'
				>
					<p className='text-xl text-center mb-4'>Stop Tracking a Habit</p>
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
						onClick={closeRemoveModal}
					>
						Cancel
					</button>
				</Modal>
			</div>
		</>
	)
}

export default Habit
