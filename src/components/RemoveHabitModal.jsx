import React from 'react'
import Modal from 'react-modal'

const RemoveHabitModal = ({ isOpen, onRequestClose, habitList, onRemoveHabit, styles }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={styles}
			contentLabel='Remove Habit Modal'
		>
			<p className='text-xl text-center'>Stop Tracking a Habit</p>
			<p className='text-sm text-center text-gray-500 font-light mb-4'>Click on a habit to stop tracking it.</p>
			<div className='flex flex-wrap gap-4'>
				{habitList.map((habit, index) => {
					return (
						<button
							className='bg-white p-2 text-black grow rounded'
							key={index}
							onClick={() => onRemoveHabit(habit)}
						>
							{habit}
						</button>
					)
				})}
			</div>
			<button
				className='bg-red-600 w-full p-2 mt-4'
				onClick={onRequestClose}
			>
				Cancel
			</button>
		</Modal>
	)
}

export default RemoveHabitModal
