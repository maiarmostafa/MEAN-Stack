import React, { Component } from 'react';
class Search extends Component {
    constructor(){
        super()
        this.state = {
            keywords:''
        }
    }


    textChanged = (e)=>{
        this.setState({keywords:e.target.value})
        this.props.onKeywordsChange(e.target.value)
    }

    render() {
        return (
        <div className="container">
            <input className="form-control mt-5 mb-5" value={this.state.keywords}
                onChange={this.textChanged} placeholder="Type to search..."/>
        </div>)

    }

}

export default Search;
