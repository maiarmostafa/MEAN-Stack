import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class StudentList extends Component {
  state = {
  }

  render() {
    return (
      <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
            {this.props.list.map((s,i)=><React.Fragment key={i+1}><tr><td>{i+1}</td><td><Link to={`/student/${s.username}`}>{s.username} </Link></td> <td>{s.age}</td> <td>{s.city}</td> <td>{s.email}</td> <td>{s.password}</td><td><input type="submit" value="Remove" onClick={async()=>{if(await axios.post(`http://localhost:3002/delete/${s.username}`));}} className="btn btn-danger"></input></td></tr></React.Fragment>)}
        </tbody>
      </table>
      </div>
    );
  }
}

export default StudentList;