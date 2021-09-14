import React from 'react';
import '../ContactDetails/ContactDetails.css';
import { Button } from '../Button';
const Form = () => {
	return (
		<>
			<form name='contact' method='post'>
				<input type='hidden' name='form-name' value='contact' />
				<div className='contained'>
					<div className='form'>
						<input
							className='form__input'
							type='text'
							name='firstName'
							id='firstname'
							placeholder=' '
							required
						/>
						<label className='form__label' htmlFor='firstname'>
							First Name
						</label>
					</div>
					<div className='form'>
						<input
							className='form__input'
							type='text'
							name='lastname'
							id='lastname'
							placeholder=' '
							required
						/>
						<label className='form__label' htmlFor='lastname'>
							Last Name
						</label>
					</div>
				</div>
				<div className='contained'>
					<div className='form'>
						<input
							className='form__input'
							type='email'
							name='email'
							id='email'
							placeholder=' '
							required
						/>
						<label className='form__label' htmlFor='email'>
							Email Address
						</label>
					</div>
					<div className='form'>
						<input
							className='form__input'
							type='tel'
							name='phone_number'
							id='phone_number'
							placeholder=' '
							required
						/>
						<label className='form__label' htmlFor='phone_number'>
							Phone Number
						</label>
					</div>
				</div>

				<div>
					<label className='text__area' htmlFor='message'>
						Your message
					</label>
					<textarea
						className='text__area'
						name='message'
						id='message'
						required
						placeholder='Enter Your Message here'></textarea>
				</div>
				<Button buttonSize='btn--wide' buttonColor='blue' type='submit'>
					Send Message
				</Button>
			</form>
		</>
	);
};

export default Form;
