import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import List from '../../components/List';
import Todo from '../../components/Todo';

describe('TodoList', () => {
    it('should exist', () => {
      expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
      var todos = [{
        id: 1,
        text: 'Do something'
        }, {
          id: 2,
          text: 'Check mail'
        }];
        var list = TestUtils.renderIntoDocument(<List todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(list, Todo);
    })
});









      
      
