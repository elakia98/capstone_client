import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import icon from "../img/user.png";
import "../styles/Dashboard.css"
//import AdminTopNavbar from "./AdminTopNavbar";

const Dashboard = ({ auth: { user } }) => {
	return (
        
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
           
            <table >
               
                                <tr>
                                    <td>Username</td>
                                    <td>{user && user.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{user && user.email}</td>
                                </tr>
                                <tr>
                                    <td>Registration Number</td>
                                    <td>{user && user.registrationNumber} </td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{user && user.gender} </td>
                                </tr>
                                <tr>
                                    <td>Designation</td>
                                    <td>{user && user.designation} </td>
                                </tr>
                                <tr>
                                    <td>Department</td>
                                    <td>{user && user.department}</td>
                                </tr>
                                <tr>
                                    <td>phone Number</td>
                                    <td>{user && user.facultyMobileNumber}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>{user && user.dob}</td>
                                </tr>
                                <tr>
                                    <td>Joining Year</td>
                                    <td>{user && user.joiningYear}</td>
                                </tr>
                               
                                

                            </table>
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
