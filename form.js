import React, { useState } from 'react';

function RegistrationForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		setSubmitted(true);
	}

	return (
		<div>
			<h1>Registration Form</h1>
			{!submitted ? (
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					
