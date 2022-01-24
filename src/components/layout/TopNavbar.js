import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
//import { DropdownButton, Dropdown,Dropdown} from 'react-bootstrap';
const TopNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul className="nav-links">
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link to="/Attendance">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Attendance</span>
				</Link>
			</li>
			<li>
				<Link to="/showAttendance">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Show Attendance</span>
				</Link>
			</li>
			<li>
				<Link onClick={logout} to="/" replace>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul className="nav-links">
			
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar bg-dark">
			
			<h1>
				<Link to="/">HOME</Link>
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

TopNavbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(TopNavbar);
