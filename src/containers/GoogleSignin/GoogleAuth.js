/* global gapi */
import React, {Component} from 'react';

class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    }
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '589900034307-mlkehdei644002mjjb8a970j38bugs1b.apps.googleusercontent.com',
			})
			
      this.auth2.then(() => {
        console.log('on init');
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
      });
    });    

    window.gapi.load('signin2', () => {
      const opts = {
        width: 200,
        height: 50,
        client_id: '589900034307-mlkehdei644002mjjb8a970j38bugs1b.apps.googleusercontent.com',
        onsuccess: this.onSuccess
      }
      gapi.signin2.render('loginButton', opts)
		})
	
	}


  onSuccess = () => {
    console.log('on success')
    this.setState({
      isSignedIn: true,
      err: null
		})
		this.props.authUserGoogle(this.state.isSignedIn);
  }

  onLoginFailed = (err) => {
    this.setState({
      isSignedIn: false,
      error: err,
    })
  }
  
	getContent() {
    if (this.state.isSignedIn) {
      return <p>hello user, you're signed in </p>
    } else {
      return (
        <div className='mt4 green'>
          <p>Sign in with Google?. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
        </div>
      )
    }
    
  }
  
  render() {
    return (      
      <div className="App">
        {this.getContent()}           
      </div>
    );
  }
}

export default GoogleSignIn;
