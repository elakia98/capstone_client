import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { adminAddFaculty } from "../actions/auth";
import PropTypes from "prop-types";
import Alert from "./layout/Alert";
import { setAlert } from "../actions/alert";

const AdminAddFaculty = ({ setAlert, adminAddFaculty
	, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
        registrationNumber:"",
		gender:"",
        designation:"",
        department:"",
        facultyMobileNumber:"",
        dob:"",
        joiningYear:"",
        subjectsCanTeach:""
	});

	const { name, email, password,registrationNumber,gender,designation,department,facultyMobileNumber,dob,joiningYear,subjectsCanTeach } = formData; 

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

		const onSubmit = async (e) => {
			e.preventDefault();
			adminAddFaculty({ name, email, password,registrationNumber,gender,designation,department,facultyMobileNumber,dob,joiningYear,subjectsCanTeach });
		//	login(registrationNumber, password);
		};

	// Redirect if logged in
	if (isAuthenticated) {
		return console.log("Addedd");
	}

	return (
		<div className="register-form">
			<h1 className="heading">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<Alert />
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="name"
						name="name"
						value={name}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="RegistrationNumber"
						name="registrationNumber"
						value={registrationNumber}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Gender"
						name="gender"
						value={gender}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="designation"
						name="designation"
						value={designation}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Department"
						name="department"
						value={department}
						onChange={(e) => onChange(e)}
					/>
				</div>
                <div className="form-group">
					<input
						type="text"
						placeholder="Faculty Mobile Number"
						name="facultyMobileNumber"
						value={facultyMobileNumber}
						onChange={(e) => onChange(e)}
					/>
				</div>
                <div className="form-group">
					<input
						type="text"
						placeholder="dob"
						name="dob"
						value={dob}
						onChange={(e) => onChange(e)}
					/>
				</div>
                <div className="form-group">
					<input
						type="text"
						placeholder="joiningYear"
						name="joiningYear"
						value={joiningYear}
						onChange={(e) => onChange(e)}
					/>
				</div>
                <div className="form-group">
					<input
						type="text"
						placeholder="subjectsCanTeach"
						name="subjectsCanTeach"
						value={subjectsCanTeach}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
		</div>
	);
}; 

AdminAddFaculty.propTypes = {
	setAlert: PropTypes.func.isRequired,
	adminAddFaculty: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, adminAddFaculty })(AdminAddFaculty);
