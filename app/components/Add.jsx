import React, { Component } from 'react';

class Add extends Component {

    submitHandler = (e) => {
      e.preventDefault();
      var todoText = this.refs.todoText.value;
      if(todoText.length > 0) {
          this.refs.todoText.value = '';
          this.props.onAdd(todoText);
      } else {
          this.refers.todoText.focus();

      }
    }
   render() {
       return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" ref="todoText" placeholder="Add a task" />
            <button className="button expanded">Add</button>
          </form>
        </div>
       )
   }
}

export default Add;
