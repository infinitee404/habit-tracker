import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
const Navbar = () => {
	return (
		<nav className='fixed top-0 w-full bg-white/50 backdrop-blur-lg backdrop-saturate-150 shadow-md '>
			<div className='max-w-[1260px] mx-auto flex justify-between items-center'>
				<Link to='/'>
					<div className='flex'>
						<img
							className='h-12'
							src={Logo}
						/>
					</div>
				</Link>
				<ul className='flex gap-10 p-4'>
					<li className='pb-2 border-b-2 border-white/0 hover:border-b-2 hover:border-[#1a4862] hover:cursor-pointer'>
						<Link to='/'>Home</Link>
					</li>
					<li className='pb-2 border-b-2 border-white/0 hover:border-b-2 hover:border-[#1a4862] hover:cursor-pointer'>
						<Link to='/habits'>Habits</Link>
					</li>
					<li className='pb-2 border-b-2 border-white/0 hover:border-b-2 hover:border-[#1a4862] hover:cursor-pointer'>
						<Link to='/calendar'>Calendar</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
