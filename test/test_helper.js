//test helper does these things
import jsdom from "jsdom";
import _$ from "jquery";
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import chai, { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/reducers";
import chaiJquery from 'chai-jquery'

//set up testing enviornment to run like a browser in the command line

global.document = jsdom.jsdom("<doctype html><html><body><body></html>");
global.window = global.document.defaultView;
//without this line of code it was not passing test CommentBoc has className comment-box
global.navigator = global.window.navigator;
const $ = _$(global.window);

//build render component to that should render a given react class

//redner component will take three args #1 the component #2 any props that need to be placed on it #3 any application state that needs to be present
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    //the second arg to the create store is some initial state
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

//build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  //this will simulate dynamically any event that is passed to simulate
  //in our case we are passing an array with multiple values so we can just use the first element in the array
  TestUtils.simulate[eventName](this[0]);
};

//set up chai jquery
chaiJquery(chai, chai.util, $)
export { renderComponent, expect };
