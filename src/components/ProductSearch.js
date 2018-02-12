import React, { Component } from 'react';

export default class ProductSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }
    }

    onUserInput(event) {
        this.setState({
            keyword: event.target.value
        });
    }

    handleSearch(event) {
        this.props.handleSearch(this.state.keyword)
    };

    render() {
        return (
            <div className = "search-wrapper">
                <input className="txt-search-box" type = "text" value = {this.state.keyword}
                placeholder = "Search by name "
                onChange = { (event) => this.onUserInput(event) } />
                <button className="btn btn-primary col-sm-offset-1" value = "Search" onClick = { (event) => this.handleSearch(event) }>Search</button>
            </div>
        )
    }

}