import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {
   render() {
       let { todos } = this.props;
       let list = todos.map( (todo, index) => {
           return <Todo key={todo.id} {...todo} />
       });
       return (
           <div>
             {list}
           </div>
       )
   }
}

export default List;
