import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import Add from '../../components/Add';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(Add).toExist();
  });
});
