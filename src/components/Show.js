import React, { useEffect ,useState} from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import icon from "../img/user.png";
import store from "../store";
import axios from "axios";
import "../styles/Dashboard.css"
import { loadAttendance } from "../actions/auth";

const Show = ({}) => {
  const [user,dispatch]=useState([]);
  useEffect(async()=>{
    try{
      const res = await axios.get("https://attendancebackend.herokuapp.com/faculty/show")
      dispatch(res.data);
  }catch(err){
     console.log(err);
  }
  },[])
  let x;
	return (
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
           <div>
           <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
               {(user && user.length>0) ? user.map((users,index)=>{
                return(
                  <tr key={index}>
                    
                    <td>{user && users.dates.slice(0,10)}</td>
                    <td>{user && users.ins}</td>
                  </tr>
                )
              }):<tr><td colSpan={"5"}></td></tr>} 
              
              
            </tbody>
          </table>
    </div>
           
        
		</div>
	);
};
Show.propTypes = {
  loadAttendance: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps,{loadAttendance})(Show);