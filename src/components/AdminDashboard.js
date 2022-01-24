import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import icon from "../img/user.png";
import TopNavbar from "./layout/TopNavbar";

const AdminDashboard =({ auth: { user } }) =>{
    return(
        <>
        <h1 style={{ marginTop: "5rem", textAlign: "center" }}>Haiii{user && user.name}</h1>
        </>
    )
}
AdminDashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(AdminDashboard);
