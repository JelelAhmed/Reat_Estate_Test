import React, { Component } from 'react';

import './NewProperties.css';

class NewProperties extends Component {
    state = {
        name: '',
        detail: '',
        realtor: ''
		}

		property = [];
		
		postDataHandler = () => {
			const propertyDetails = {
				name: this.state.name,
				detail: this.state.detail,
				realtor: this.state.realtor
			}

			this.props.storePropertyHandler(propertyDetails);
			 

			// fetch('https://jsonplaceholder.typicode.com/posts', {
			// method: 'post',
			// headers: {'detail-Type': 'application/json'},
			// body: JSON.stringify(propertyDetails)
			// })
			// .then(response  => response.json())
			// .then(response => {
			// 	console.log(response);
			// })
			// .catch(console.log)	
		}

    render () {
        return (
            <div className="NewProperties tc">
                <h1>Add a Property</h1>
                <label>Property Name</label>
								<input className="b mw5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
											 type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Property Details</label>
                <textarea className="b mw5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" rows="3" value={this.state.detail} onChange={(event) => this.setState({detail: event.target.value})} />
                <label>Realtor</label>
                <textarea className="b mw5 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" rows="1" value={this.state.realtor} onChange={(event) => this.setState({realtor: event.target.value})} />
                <button className='link dim black pointer' onClick={this.postDataHandler}>Add a Property</button>
            </div>
        );
    }
}

export default NewProperties;