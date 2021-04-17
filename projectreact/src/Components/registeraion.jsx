import React, { Component } from 'react';
import * as actionTypes from './../reducer/actions';
import { connect } from 'react-redux';
import axios from 'axios';
class Registeration extends Component {
    state = {
        student: {
            username: '',
            age: '',
            city: '',
            email: '',
            password: '',
            profile_pic:''
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container bg-dark p-4 mt-5">
                    <form className="container g-3">
                        <h3 className="text-center mb-4" style={{ color: "white" }}> Registeration Form</h3>
                        <div className="mb-3 col-auto input-group">
                            <label htmlFor="name" className="form-label input-group-text">UserName:</label>
                            <input type="text" className="form-control" placeholder="Please Enter Your Name" id="name" onChange={(e) => { this.setState({ student: { username: e.target.value, age: this.state.student.age, city: this.state.student.city, email: this.state.student.email, password: this.state.student.password ,profile_pic:this.state.student.profile_pic} }); console.log(this.state.student) }} />
                        </div>
                        <div className="mb-3 col-auto input-group">
                            <label htmlFor="age" className="form-label input-group-text">Age:</label>
                            <input type="number" className="form-control" placeholder="Please Enter Your Age" id="age" onChange={(e) => { this.setState({ student: { username: this.state.student.username, age: e.target.value, city: this.state.student.city, email: this.state.student.email, password: this.state.student.password ,profile_pic:this.state.student.profile_pic} }); console.log(this.state.student) }} />
                        </div>
                        <div className="mb-3 col-auto input-group">
                            <label htmlFor="city" className="form-label input-group-text">City:</label>
                            <input type="text" className="form-control" placeholder="Please Enter Your City" id="city" onChange={(e) => { this.setState({ student: { username: this.state.student.username, age: this.state.student.age, city: e.target.value, email: this.state.student.email, password: this.state.student.password ,profile_pic:this.state.student.profile_pic} }); console.log(this.state.student) }} />
                        </div>
                        <div className="mb-3 col-auto input-group">
                            <label htmlFor="Email" className="form-label input-group-text">Email:</label>
                            <input type="email" className="form-control" placeholder="Please Enter Your Email" id="Email" onChange={(e) => { this.setState({ student: { username: this.state.student.username, age: this.state.student.age, city: this.state.student.city, email: e.target.value, password: this.state.student.password ,profile_pic:this.state.student.profile_pic} }); console.log(this.state.student) }} />
                        </div>
                        <div className="mb-3 col-auto input-group">
                            <label htmlFor="Password" className="form-label input-group-text">Password:</label>
                            <input type="password" className="form-control" placeholder="Please Enter Your Password" id="Password" onChange={(e) => { this.setState({ student: { username: this.state.student.username, age: this.state.student.age, city: this.state.student.city, email: this.state.student.email, password: e.target.value ,profile_pic:this.state.student.profile_pic} }); console.log(this.state.student) }} />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                            <input type="file" className="form-control" id="inputGroupFile01" onChange={(e) => { this.setState({ student: { username: this.state.student.username, age: this.state.student.age, city: this.state.student.city, email: this.state.student.email, password: e.target.value ,profile_pic:e.target.files[0]} }); console.log(this.state.student) }} />
                        </div>
                        <div className="col-auto text-center">
                            <button type="button" className="btn btn-warning mb-3" onClick={() => this.props.onAdd(this.state.student)}>Register</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: async(student) =>{ 
            const students = new FormData();
            students.append("username",student.username)
            students.append("age",student.age)
            students.append("password",student.password)
            students.append("city",student.city)
            students.append("email",student.email)
            students.append("profile_pic",student.profile_pic)
            const {data} =await axios.post("http://localhost:3002/reg",students)
            console.log(data);
            if(data)
            dispatch({ type: actionTypes.ADD, payload: { student } })
        }
    }
};
export default connect(null, mapDispatchToProps)(Registeration);