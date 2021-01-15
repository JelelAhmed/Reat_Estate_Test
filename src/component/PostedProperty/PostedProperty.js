import React from 'react'
import './PostedProperty.css'

const PostedProperty = ({name, detail, realtor}) => {
	return (
		<div className='postedProperty mb4 tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
				<h4 className='borderBottom f3 dim black pr3'>Property: {name}</h4>
				<p className='borderBottom f3 dim black pr3'>Details: {detail}</p>
				<p className='borderBottom f3 dim black pr3'>Realtor: {realtor}</p>
		</div>
	)
}

export default PostedProperty