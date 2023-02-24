import React from 'react'


import Heading from '../components/Heading'
import LeadTwo from '../components/LeadTwo'
import Event_head from '../components/Event_head'
import Event_date from '../components/Event_date'


import bg from '../assets/bg.png'
import heroimg from '../assets/olleaguesDiscussing.png'
import aboutbg from '../assets/squigglesColorful.png'
import thumbup from '../assets/thumbup.svg'
import pointing from '../assets/pointing.svg'
import twohands from '../assets/twohands.svg'
import event1 from '../assets/abstract.png'
import event2 from '../assets/events.png'
import event3 from '../assets/people.png'



function Home() {
	return (
		<React.Fragment>
			<div className='bg-black'>
				{/* quick navigator */}
				<div className='fixed float-right right-4 md:right-7 lg:right-14 top-40 md:top-20 lg:top-44'>
					<a href='#Hero'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#1B2A41" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='white'>H</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Aboutus'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>A</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Events'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>E</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Team'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>T</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Coordinator'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>C</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Footer'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>F</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
				</div>
				{/* gradient for hero and about us*/}
				<div className='bg-gradient-to-b from-[#1B2A41] to-black'>
					{/*Hero section*/}
					<div id='Hero' className='text-black p-8 md:p-20'
						style={{
							backgroundImage: `url(${bg})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover'
						}}
					>
						<div className='pt-20 md:pt-10 lg:pt-20 md:flex justify-center items-center'>
							{/*Hero side text*/}
							<div className='mx-auto w-[200] md:w-[350px]'>
								<h1 className='text-white work-sans text-[30px] md:text-[32px] lg:text-[36px] '
									style={{
										fontWeight: 700,
										fontVariant: 'small-caps',
										lineHeight: '42px',
									}}>
									We are Microsoft Student Club ( ■_■)</h1>
								<br />
								<p className='text-[#CCC9DC] work-sans md:text-[18px] lg:text-[20px]'
									style={{
										fontWeight: 350,
										lineHeight: '26px',
									}}
								>Quisque eget erat ut turpis rutrum luctus. Proin eget sem sit amet erat hendrerit tristique. Nam at leo in tellus lobortis iaculis nec eget enim. Curabitur suscipit lacus quis ante maximus, sit amet commodo sem condimentum.</p>
							</div>
							{/*Hero side img*/}
							<img className='mx-auto w-[350px] md:w-[400px] lg:w-[600px]' src={heroimg} />
						</div>
					</div>
					{/*About section*/}
					<div id='Aboutus' className='p-5 pb-10 md:pb-20'>
						<div className='mt-5'>
							<Heading>About Us</Heading>
							<LeadTwo >Who we are and what we do? ^_^</LeadTwo>
						</div>
						<div
							className='pt-10 '
						>
							<p
								style={{
									fontWeight: 350,
									lineHeight: '26px',
								}}
								className='work-sans md:text-[18px] lg:text-[20px] mx-auto md:w-[700px] text-[#CCC9DC] '
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at gravida quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras accumsan arcu sit amet urna pretium maximus. Duis dignissim ipsum risus, sed consectetur diam elementum eu. Pellentesque finibus nunc et urna aliquam elementum. Nam ex lectus, accumsan et ex hendrerit, vehicula ultrices diam. Donec porttitor a tortor at blandit. Quisque eget erat ut turpis rutrum luctus. Proin eget sem sit amet erat hendrerit tristique. Nam at leo in tellus lobortis iaculis nec eget enim. Curabitur suscipit lacus quis ante maximus, sit amet commodo sem condimentum.</p>
							<div className='mt-20 md:mt-24 lg:mt-32 space-y-4'>
								<div className='md:ml-40 md:flex justify-start'>
									<div className='text-white md:w-[360px] '>
										<h1
											style={{
												fontVariant: 'small-caps',
												fontWeight: 600
											}}
											className='work-sans text-[40px] '
										>Beginning</h1>
										<p
											style={{
												fontWeight: 600
											}}
											className='work-sans text-[22px] '
										>12 Jan 2023</p>
										<p
											className='text-[#CCC9DC] md:text-[18px] lg:text-[20px]'
										>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis quis arcu et auctor. Nulla nec feugiat enim, hendrerit gravida ligula.</p>
									</div>
									<img className='mt-6 mx-auto' src={thumbup} />
								</div>
								<div className='md:mr-40 md:flex justify-end'>
									<img className='mt-6 mx-auto' src={pointing} />
									<div className='text-white md:w-[360px] '>
										<h1
											style={{
												fontVariant: 'small-caps',
												fontWeight: 600
											}}
											className='work-sans text-[40px] '
										>First Event</h1>
										<p
											style={{
												fontWeight: 600
											}}
											className='work-sans text-[22px] '
										>12 Jan 2023</p>
										<p
											className='text-[#CCC9DC] md:text-[18px] lg:text-[20px]'
										>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis quis arcu et auctor. Nulla nec feugiat enim, hendrerit gravida ligula.</p>
									</div>
								</div>
								<div className='md:ml-40 md:flex justify-start'>
									<div className='text-white md:w-[360px] '>
										<h1
											style={{
												fontVariant: 'small-caps',
												fontWeight: 600
											}}
											className='work-sans text-[40px] '
										>Some Event</h1>
										<p
											style={{
												fontWeight: 600
											}}
											className='work-sans text-[22px] '
										>12 Jan 2023</p>
										<p
											className='text-[#CCC9DC] md:text-[18px] lg:text-[20px]'
										>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis quis arcu et auctor. Nulla nec feugiat enim, hendrerit gravida ligula.</p>
									</div>
									<img className='mt-6 mx-auto' src={twohands} />
								</div>
							</div>
						</div>


					</div>
				</div>
				{/*Event section*/}
				<div id='Events' className='bg-[#0C1821] pt-5 pb-5 p-5'>
					<Heading >Events</Heading>
					<LeadTwo >Explore the events which we have done (●'◡'●)</LeadTwo>

					<div className='mt-14 mb-8'>
						<div className='md:px-40 md:flex md:justify-items-stretch'>
							<div className='mx-auto w-[90%] md:w-[70%] h-[300px] md:mb-5 rounded-xl event-bg-box'
								style={{
									backgroundImage: `url(${event1})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Event_head className='md:mt-[150px] md:ml-[40px] ' >EVENT - 1</Event_head>
								<Event_date className='md:pl-[40px] ' >21 JAN 2023</Event_date>
							</div>
							<div className='mx-auto w-[90%] md:-ml-20 md:mt-40 md:w-[60%] h-[300px] md:mb-5 rounded-xl event-bg-box'
								style={{
									backgroundImage: `url(${event2})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Event_head className='mt-[150px] ml-[40px] ' >EVENT - 2</Event_head>
								<Event_date className='pl-[40px] ' >21 JAN 2023</Event_date>
							</div>
							<div className='mx-auto w-[90%] md:-ml-20 md:mt-80 md:w-[50%] h-[300px] md:mb-5 rounded-xl event-bg-box'
								style={{
									backgroundImage: `url(${event3})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Event_head className='mt-[150px] ml-[40px] ' >EVENT - 3</Event_head>
								<Event_date className='pl-[40px] ' >21 JAN 2023</Event_date>

							</div>
						</div>
					</div>
				</div>
				{/*Our team section*/}
				<div id='Team' className='pt-10 bg-gradient-to-b from-[#1B2A41] to-black '>
					<Heading >OUR TEAM</Heading>
					<LeadTwo >Meet the people behind the work (⌐■_■) </LeadTwo>
					<div className='mt-6 md:mt-16'>

						{/* Admin team */}
						<div className='md:flex md:justify-between'>
							<h1 className='mx-auto text-[28px] text-center md:text-left md:text-[38px] lg:text-[64px] w-80 md:ml-20 team-head'>Admin team</h1>
							<div className="mt-3 ml-5 flex overflow-x-scroll pb-5 md:pb-10 hide-scroll-bar md:ml-20">
								<div className="flex flex-nowrap md:mx-8 space-x-8" >
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
								</div>
							</div>
						</div>

						{/* Team leads */}
						<div className='md:flex md:justify-between'>
							<h1 className='mx-auto text-[28px] text-center md:text-left md:text-[38px] lg:text-[64px] w-80 md:ml-20 team-head'>Team leads</h1>
							<div className="mt-3 ml-5 flex overflow-x-scroll pb-5 md:pb-10 hide-scroll-bar">
								<div className="flex flex-nowrap md:mx-8 space-x-8" >
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
								</div>
							</div>
						</div>

						{/* Team members */}
						<div className='md:flex md:justify-between'>
							<h1 className='mx-auto text-[28px] text-center md:text-left md:text-[38px] lg:text-[64px] w-80 md:ml-20 team-head'>Team Members</h1>
							<div className="mt-3 ml-5 flex overflow-x-scroll pb-5 md:pb-10 hide-scroll-bar md:ml-40">
								<div className="flex flex-nowrap md:mx-8 space-x-8" >
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
									<div className='m-0 inline-block'>
										<section className='rounded-xl w-[240px] h-[320px] md:w-[280px] md:h-[360px] bg-black'>
										</section>
										<section className='-mt-10 mx-auto rounded-xl w-[220px] h-[70px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
										</section>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Club coordinator section*/}
				<div id='Coordinator'
					style={{

					}}
					className="	 bg-[#1B2A41] py-10" >
					<div className='rounded-full w-[220px] h-[220px] md:w-[250px] md:h-[250px] bg-[#191919] mx-auto'>
						<img />
					</div>
					<div>
						<h1 className='text-center work-sans text-white text-[32px] md:text-[42px] lg:text-[48px] '
							style={{
								textTransform: 'uppercase',
								fontWeight: 700,
							}}>
							Club Coordinator
						</h1>
						<div className='mt-2'>
							<p className='text-center work-sans text-[#CCC9DC] md:text-[22px] '
								style={{
									fontWeight: 600,
								}}
							>
								Dr. S Sudheer Mangalampalli
							</p>
							<p className='text-center work-sans text-[#CCC9DC] md:text-[22px]'
								style={{
									fontWeight: 600,
								}}
							>
								SCOPE
							</p>
						</div>
					</div>
				</div>
			</div>

		</React.Fragment>
	)
}

export default Home