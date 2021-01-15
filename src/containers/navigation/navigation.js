import React from 'react'
import './navigation.css'

const Navigation = ({onRouteChange, isSignedIn, addProperty, authMethod}) => {
	return ( 
		<div>
			{ isSignedIn === true 
				? ( authMethod === 'password'
						?	<nav>
								<p 
								onClick={() => addProperty('no')}
								className='f3 link dim black underline pr3 pointer'>Home</p>
								<p 
								onClick={() => addProperty('yes')}
								className='f3 link dim black underline pr3 pointer'>Add a Property</p>
								<p 
								onClick={() => onRouteChange('signout')}
								className='f3 link dim black underline pr3 pointer'>Sign Out</p>
							</nav>
						: <nav>
								<p 
								onClick={() => addProperty('no')}
								className='f3 link dim black underline pr3 pointer'>Home</p>
								<p 
								onClick={() => addProperty('yes')}
								className='f3 link dim black underline pr3 pointer'>Add a Property</p>
							</nav>
				  )	
				: <nav>
						<p 
						 onClick={() => onRouteChange('signin')} 
						 className='f3 link dim black underline pr3 pointer'>Sign In</p>
						<p 
						 onClick={() => onRouteChange('register')} 
						 className='f3 link dim black underline pr3 pointer'>Register</p>
					</nav>				
			}
		</div>
	)
}

export default Navigation;
