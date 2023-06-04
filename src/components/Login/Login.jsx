import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
	const { user, signInUser, signInWithGoogle } = useContext(AuthContext);
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signInUser(email, password)
			.then((result) => {
				const loggedInUser = result.user;
				console.log(loggedInUser);
				form.reset();
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	};
	const googlePopUpHandler = () => {
		signInWithGoogle()
			.then((result) => {
				const googleLoggedInUser = result.user;
				console.log(googleLoggedInUser);
			})
			.then((error) => {
				console.log(error.message);
			});
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Please Login now!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body" onSubmit={handleLogin}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
					<div className="form-control mt-6">
						<button onClick={googlePopUpHandler} className="btn btn-primary">
							Google
						</button>
					</div>
					<Link className="mx-auto text-center" to="/register">
						<button className="btn btn-link ">
							New to auth Master? Please Register!!!
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
