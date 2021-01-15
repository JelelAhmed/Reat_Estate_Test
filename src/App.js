/*global gapi */

import React, { Component } from 'react';
import PostedProperties from './component/PostedProperty/PostedProperty';
import Register from './component/register/Register';
import SignIn from './component/signin/Signin';
import NavBar from './containers/navigation/navigation';
import './App.css';
import 'tachyons';
import NewProperties from './component/NewProperties/NewProperties';
import GoogleSignIn from './containers/GoogleSignin/GoogleAuth';

class App extends Component {

	state = {
		route: 'signin',
		isSignedIn: false,
		post: '',
		propertyArray: [],
		usersArray: [],
		authMethod: null
	}

	addPropertyHandler = (yes) => {
		this.setState({post: yes});
	}

	storePropertyHandler = (properties) => {
		this.state.propertyArray.push(properties);
		console.log(this.state.propertyArray);
		this.addPropertyHandler();
	}

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState({ isSignedIn: false});
		} else if (route === 'home') {
			this.setState({isSignedIn: true})
		}

		this.setState({route: route});
	}

	loadUsers = (user) => {
		this.setState({authMethod: 'password'});
		this.state.usersArray.push(user);
		console.log(this.state.usersArray, this.state.authMethod);
	}

	authUserPassword = (login) => {
		this.state.usersArray.map((user) => {
			if	(login.password === user.password && login.email === user.email) {
				this.setState({authMethod: 'password'});
				this.onRouteChange('home')
			} else {
				console.log('Failure')
			}
		})
	}

	authUserGoogle = (auth) => {
		if (auth) {
			this.setState({authMethod: 'google'})
			this.onRouteChange('home');
		} else {
			console.log('err');
		}
	}

	signOut = () => {
		const auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(() => {
		  console.log('User signed out.');
			this.setState({isSignedIn: false});
			this.setState({authMethod: ''})
			console.log(this.state.isSignedIn);
			this.onRouteChange('signin');
		});
	}
	
	onGoogleLogout = () => {
		console.log('logout');
	}
	
	render () {
		const { route, propertyArray, isSignedIn, post, authMethod } = this.state;
		return (
			<div className='App'>
				<NavBar onRouteChange={this.onRouteChange} authMethod={authMethod} isSignedIn={isSignedIn} addProperty={this.addPropertyHandler} />
				{this.state.authMethod === 'google'	
				  ?  <input 
							onClick={this.signOut}
							className="nm b ph3 ml2 white pv2 input-reset ba b--black bg-orange grow pointer f6 dib" 
							type="submit" 
							value="Logout with Google"/>
					: null
				}
				{route === 'home'
						? ( post === 'yes'
								? <NewProperties storePropertyHandler={this.storePropertyHandler} />
								: (!propertyArray.length 
										? <div className='tc pa3 ma3 white f4'> No Listed Property. Add a Property Above.</div>
										: this.state.propertyArray.map((property) => {
												return	<PostedProperties 
																	key={property.name}
																	name={property.name} 
																	detail={property.detail} 
																	realtor={property.realtor}
																/>
											})
									)
						  )
												
						: ( this.state.route === 'signin'
								? <SignIn authUserPassword={this.authUserPassword}><GoogleSignIn authUserGoogle={this.authUserGoogle}/></SignIn>
								: <Register loadUsers={this.loadUsers} onRouteChange={this.onRouteChange} />
							)
				}
			</div>
		)
	}
}

export default App;
