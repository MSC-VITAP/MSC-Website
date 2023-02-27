import React from 'react'

import Heading from '../components/Heading'
import login from '../assets/bg/login.png'
import { Link } from 'react-router-dom'

function Memberlogin() {
	return (
		<React.Fragment>
			<div className='py-24 bg-gradient-to-br from-[#1B2A41] to-black '>
				<Heading >Members login</Heading>
				<div className='mt-24 md:mt-0 md:flex md:justify-evenly md:items-center'>
					<div>
						<img className='mx-auto w-[350px] h-[300px] md:w-[450px] md:h-[386px] lg:w-[536px] lg:h-[456px]' src={login} />
					</div>
					<form className='mt-5' action='' method='POST'>
						<div className=' md:bg-[#324A5F] member-login focus:opacity-100 hover:opacity-100 p-3 md:p-7 lg:p-10 space-y-4 text-center md:text-left '>
							<div>
								<input
									style={{
										fontWeight: 600,
									}}
									type="text"
									name="username"
									id="username"
									placeholder="Username"
									className="work-sans rounded-md border border-white bg-[#CCC9DC] py-2 px-6 text-base text-[#0C1821] outline-none focus:border-[#0C1821] focus:shadow-md"
								/>
							</div>
							<div>
								<input
									style={{
										fontWeight: 600,
									}}
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									className="work-sans rounded-md border border-white bg-[#CCC9DC] py-2 px-6 text-base text-[#0C1821] outline-none focus:border-[#0C1821] focus:shadow-md"
								/>
							</div>
							<div>
								<input
									style={{
										fontWeight: 600,
									}}
									type="password"
									name="confirmpassword"
									id="confirmpassword"
									placeholder="Confirm password"
									className="work-sans rounded-md border border-white bg-[#CCC9DC] py-2 px-6 text-base text-[#0C1821] outline-none focus:border-[#0C1821] focus:shadow-md"
								/>
							</div>
							<div>
								<div>
									<button
										className="hover:shadow-form rounded-2xl bg-[#1B2A41] py-2 px-5 text-base font-semibold text-white outline-none"
									>
										<Link to='/pageunderconstruction' >Login</Link>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Memberlogin