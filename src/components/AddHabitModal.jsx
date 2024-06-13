import React from 'react'
import Modal from 'react-modal'

const AddHabitModal = ({ isOpen, onRequestClose, onAddHabit, newHabit, setNewHabit, styles }) => {
	const addHabit = () => {
		if (newHabit.length === 0) return
		onAddHabit(newHabit)
		onRequestClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={styles}
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
				onClick={onRequestClose}
			>
				Cancel
			</button>
		</Modal>
	)
}

export default AddHabitModal
