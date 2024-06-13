import { Link } from 'react-router-dom'
import { BiCalendar } from 'react-icons/bi'
const Navbar = () => {
	return (
		<nav className='fixed top-0 w-full bg-white/10'>
			<div className='max-w-[1260px] mx-auto flex justify-between items-center'>
				<Link to='/'>
					<div className='px-4'>
						<BiCalendar size={32} />
					</div>
					{/* <p className='font-cursive text-4xl'>HT</p> */}
				</Link>
				<ul className='flex gap-10 p-4'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/habits'>Habits</Link>
					</li>
					<li>
						<Link to='/calendar'>Calendar</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
