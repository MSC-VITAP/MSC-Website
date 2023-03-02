import React, { useEffect } from 'react'
import Heading from '../components/Heading'
import login from '../assets/bg/login.png'
import { Link } from 'react-router-dom'

// let faceio = new faceIO("fioa414d");
// const handleRegister = async () => {
// 	try {
// 		let response = await faceio.enroll({
// 			locale: "auto",
// 			payload: {
// 				email: "example@gmail.com",
// 			},
// 		});

// 		console.log(` Unique Facial ID: ${response.facialId}
//       Enrollment Date: ${response.timestamp}
//       Gender: ${response.details.gender}
//       Age Approximation: ${response.details.age}`);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// function authenticateUser() {
// 	// Start the facial authentication process (Identify a previously enrolled user)
// 	faceio.authenticate({
// 		"locale": "auto" // Default user locale
// 	}).then(userData => {
// 		console.log("Success, user recognized")
// 		// Grab the facial ID linked to this particular user which will be same
// 		// for each of his successful future authentication. FACEIO recommend
// 		// that your rely on this ID if you plan to uniquely identify
// 		// all enrolled users on your backend for example.
// 		console.log("Linked facial Id: " + userData.facialId)
// 		// Grab the arbitrary data you have already linked (if any) to this particular user
// 		// during his enrollment via the payload parameter the enroll() method takes.
// 		console.log("Associated Payload: " + JSON.stringify(userData.payload))
// 		// {"whoami": 123456, "email": "john.doe@example.com"} set via enroll()
// 	}).catch(errCode => {
// 		// handle authentication failure. Visit:
// 		// https://faceio.net/integration-guide#error-codes
// 		// for the list of all possible error codes
// 		handleError(errCode);

// 		// If you want to restart the session again without refreshing the current TAB. Just call:
// 		faceio.restartSession();
// 		// restartSession() let you authenticate the same user again (in case of failure) 
// 		// without refreshing the entire page.
// 		// restartSession() is available starting from the PRO plan and up, so think of upgrading your app
// 		// for user usability.
// 	});
// }
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
							<div className='py-2'>
								<div>
									<button onClick={handleRegister}
										className="hover:shadow-form rounded-2xl bg-[#1B2A41] py-2 px-5 text-base font-semibold text-white outline-none"
									>
										<Link to='' >Register</Link>
									</button>
								</div>
								<div>
									<button onClick={authenticateUser}
										className="hover:shadow-form rounded-2xl bg-[#1B2A41] py-2 px-5 text-base font-semibold text-white outline-none"
									>
										<Link to='' >Login</Link>
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