import React from 'react';

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value})
	}

	onRegisterSubmit = (event) => {
		const { name, email, password } = this.state;
		const { loadUsers, onRouteChange} = this.props;
		event.preventDefault();
		if (email || password) {
			const userData ={
				name: name,
				email: email,
				password: password
			}

			loadUsers(userData);
			onRouteChange('home');
		}	else {
			console.log('Please Input valid Credentials');
		}
	}

	render() {
		return (
			<div>
				<form className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
							<div className="measure">
								<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
									<legend className="f1 fw6 ph0 mh0">Register</legend>
									<div className="mt3">
										<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
										<input 
											className="pa2 mw5 input-reset ba bg-transparent hover-bg-black hover-white w-100"
											onChange={this.onNameChange} 
											type="text" 
											name="name"  
											id="name"
											required
										/>
									</div>
									<div className="mt3">
										<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
										<input 
											className="pa2 mw5 input-reset ba bg-transparent hover-bg-black hover-white w-100"
											onChange={this.onEmailChange} 
											type="email" 
											name="email-address"  
											id="email-address"
											required
										/>
									</div>
									<div className="mv3">
										<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
										<input 
											className="b pa2 mw5 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
											onChange={this.onPasswordChange}
											type="password" 
											name="password"  
											id="password"
											required
										/>
									</div>
								</fieldset>
								<div className="center">
									<input 
										onClick={this.onRegisterSubmit}
										className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
										type="submit" 
										value="Register"
									/>
								</div>
							</div>
						</main>
					</form>
			</div>
		)
	}
}

export default Register;