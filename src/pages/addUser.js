import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../redux/users/userActions';

export default function NewUser() {
	const users = useSelector((state) => state.users.users);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [city, setCity] = useState('');
	const [nameInputError, setNameInputError] = useState('');
	const [emailInputError, setEmailInputError] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isEmailValid, setIEmailsValid] = useState(false);

	let navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(email.trim())) {
			setIEmailsValid(true);
			setEmailInputError('');
		} else {
			setIEmailsValid(false);
			setEmailInputError('Please provide a valid email');
		}
	}, [email]);

	useEffect(() => {
		if (name.length < 2) {
			setNameInputError('Name must be two or more characters');
			setIsValid(false);
		} else {
			setNameInputError('');
			setIsValid(true);
		}
	}, [name]);

	const submitData = () => {
		const payload = { name, email, username, city, id: users.length + 1 };
		dispatch(AddUser(payload, navigate));
	};

	return (
		<div>
			<div className="container">
				<h3 className="my-5">Dashboard</h3>
				<div className="card my-5">
					<div className="card-header d-flex w-full justify-content-between align-items-center">
						Add User
					</div>
					<div className="card-body">
						<form>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									className={`form-control ${
										!isValid ? 'is-invalid' : 'is-valid'
									}`}
									id="name"
									placeholder="John Smith"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
								{nameInputError && <p className="text-danger">{nameInputError}</p>}
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									className={`form-control ${
										!isEmailValid ? 'is-invalid' : 'is-valid'
									}`}
									id="email"
									placeholder="name@example.com"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								{emailInputError && (
									<p className="text-danger">{emailInputError}</p>
								)}
							</div>

							<div className="mb-3">
								<label htmlFor="username" className="form-label">
									Username
								</label>
								<input
									type="text"
									className="form-control"
									id="username"
									placeholder="username"
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="City" className="form-label">
									City
								</label>
								<input
									type="text"
									className="form-control"
									id="city"
									placeholder="city"
									value={city}
									onChange={(e) => {
										setCity(e.target.value);
									}}
								/>
							</div>

							<div className="d-flex justify-content-end align-content-center">
								<Link to="/" className="btn btn-outline-danger mx-3">
									Cancel
								</Link>
								<button
									className="btn btn-success"
									type="button"
									disabled={!isEmailValid && !isValid}
									onClick={() => submitData()}>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
