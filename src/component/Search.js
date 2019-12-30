import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import cities from '../util/cities'

export class Search extends Component {
    constructor(){
        super()
        this.state = {
            search : ""
        }
    }
    handleChange = (event) =>{
        this.setState({
            search : event.target.value
        })
    }
    render() {
        return (
            <div>
                <TextField 
                onChange = {this.handleChange}
                value = {this.state.search}
                name = "search"
                variant = "outlined"
                label = "Search"
                size = "small"
                />
            </div>
        )
    }
}

export default Search
