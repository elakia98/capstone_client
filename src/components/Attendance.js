import React,{ Fragment, useState ,useEffect} from "react";
import { connect } from "react-redux";
import { Link, Redirect,useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import axios from "axios";

//import {atte} from "../actions/auth";
import { setAlert } from "../actions/alert";
import 'react-datepicker/dist/react-datepicker.css';
import {atte} from "../actions/auth";
import { loadAttendance } from "../actions/auth";

const Attendance=({setAlert,atte,isAuthenticated})=>{
	const [dates, setDate] = useState(new Date().setHours(0,0,0,0));
	const [ins, setIns] = useState("");
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	//const [user,dispatch]=useState([]);
	// useEffect(async()=>{
	// 	try{
	// 	  const res = await axios.get("http://localhost:5000/faculty/show")
	// 	  dispatch(res.data);
	//   }catch(err){
	// 	 console.log(err);
	//   }
	//   },[])



	const handleClick = () => {
		// if( == "Already there")
		// 	console.log("Haiiiiii")
		
			setOpen(true);
	  
	};
  
	const handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
  
	  setOpen(false);
	};

  const navigateTo = () => history.push('/showAttendance');//eg.history.push('/login');
    // const [formData, setFormData] = useState({
	// 	// faculty:"",
    //     // dates:new Date(),
	// 	ins:""

	// });
    //const {dates,ins} = formData;

	const onChange = (e) =>{
		//setFormData({ ...formData, [e.target.name]: e.target.value });
		setIns(e.target.value);
		//console.log(e.target);
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		atte({dates,ins});
	};

	const action = (
		<React.Fragment>
		  <Button color="secondary" size="small" onClick={handleClose}>
			UNDO
		  </Button>
		  <IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		  >
			<CloseIcon fontSize="small" />
		  </IconButton>
		</React.Fragment>
	  );



    return(
        <div className="login-form">
            
			<h1 className="heading">Attendance</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Add your presence here
			</p>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					{/* <input
						type="faculty"
						placeholder="faculty"
						name="faculty"
						value={faculty}
						onChange={(e) => onChange(e)}
						required
					/> */}
					<DatePicker
					  
					selected={dates} name="dates" value={dates} onChange={(dates)=>setDate(dates.setHours(0,0,0,0))} /> 
					<input 
						type="ins"
						placeholder="P or A"
						name="ins"
						value={ins}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				
				<input type="submit" className="btn" value="Add Attendance"/>
				<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="haiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas"
        action={action}
      />
				
			</form>
		</div>
	);
    
}
Attendance.propTypes = {
	auth: PropTypes.object.isRequired,
	atte: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};


const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});


export default connect(mapStateToProps, { setAlert, atte })(Attendance);
