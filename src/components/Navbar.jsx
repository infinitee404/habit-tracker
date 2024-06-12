import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Navbar = () => {
	return (
		<nav className='fixed top-0 w-full  max-w-[1260px] left-1/2 -translate-x-[50%] flex justify-between items-center p-4'>
			<Link to='/'>
				{/* <img
					src={Logo}
					alt='logo'
					width='50px'
				/> */}
				<p className='font-cursive text-4xl'>HT</p>
			</Link>
			<ul className='flex gap-10'>
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
		</nav>
	)
}

export default Navbar
