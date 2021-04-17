import React, { Component } from 'react';
import Search from './Search';
import StudentList from './studentList';
import axios from "axios";

class Student extends Component {
    state = { copiedList:[],
    liststudent:[]
    }

    async componentDidMount(){
        const {data}= await axios.get("http://localhost:3002/allUsers");
       this.setState({copiedList:data})
       this.setState({liststudent:data})
       }

    filterList = (keywords) => {
        console.log(this.props)
        console.log(this.state.copiedList);

        const filteredList = this.state.liststudent.filter((item) => {
            return item.username.toLowerCase().includes(keywords.toLowerCase())
        })

        this.setState({ copiedList: filteredList })
        console.log(filteredList);


    }
    render() { 
        return ( <React.Fragment>
            <Search onKeywordsChange={this.filterList} ></Search>
            <StudentList list={this.state.copiedList}></StudentList>
        </React.Fragment>  );
    }
}
export default Student;