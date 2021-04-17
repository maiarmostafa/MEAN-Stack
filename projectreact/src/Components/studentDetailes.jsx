import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";

class StudentDetailes extends Component {
    state = { student: {} }
    propss;
    constructor(props) {
        super(props);
        this.propss=props;
    }
    
    async componentDidMount(){
         const {data}=await axios.get("http://localhost:3002/allUsers");
         this.setState({student:data.find(s => s.username == this.propss.match.params.username)})
        
       }
    render() {
        return (
            <div className="container">
                <div className="card m-4" style={{ width: "18rem" }}>
                <img src={"http://localhost:3002/"+this.state.student.profile_pic} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.student.username}</h5>
                        <p className="card-text">{this.state.student.city}</p>
                        <p className="card-text">{this.state.student.email}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentDetailes;