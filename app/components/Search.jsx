import React, { Component } from 'react';

class Search extends Component {
    searchHandler = () => {
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    }
   render() {
       return (
        <div>
        <div>
            <input type="search" ref="searchText" placeholder="Search things to do"/>
        </div>
        <div>
            <label>
                <input type="checkbox" ref="showCompleted" onChange={this.searchHandler}/>
                Show completed tasks
            </label>
        </div>
        </div>
       )
   }
}

export default Search;
