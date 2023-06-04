import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
	const { user, signOutUser } = useContext(AuthContext);

	const handleSignOut = () => {
		signOutUser()
			.then(() => {})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div>
			<div className="navbar bg-primary text-primary-content">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					AuthMaster
				</Link>
				<Link className="btn btn-ghost normal-case text-xl" to="/home">
					Home
				</Link>
				<Link className="btn btn-ghost normal-case text-xl" to="/orders">
					Orders
				</Link>
				{user ? (
					<div>
						<span className=" normal-case text-xl">{user.email}</span>
						<button
							onClick={handleSignOut}
							className="btn btn-ghost normal-case text-xl"
						>
							Sign Out
						</button>
					</div>
				) : (
					<>
						<Link className="btn btn-ghost normal-case text-xl" to="/login">
							Login
						</Link>
						<Link className="btn btn-ghost normal-case text-xl" to="/register">
							Register
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
