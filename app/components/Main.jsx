import React, { Component } from 'react';
import List from './List';
import Add from './Add';
import Search from './Search';

class Main extends Component {

  state = {
    showCompleted: false,
    searchText:'',
    todos: [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Clean the yard'
      }
      ,
      {
        id: 3,
        text: 'Buy groceries'
      }
      ,
      {
        id: 4,
        text: 'Go to the movies'
      }
    ]
  }
  addHandler = (text) => {
    alert('new todo: '+ text);
  }
  searchHandler = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  render() {
    let { todos } = this.state;

    return (
      <div>
        <Search onSearch={this.searchHandler}/>
        <List todos={todos} />
        <Add onAdd={this.addHandler} />
      </div>
    )
  }
}

export default Main;
