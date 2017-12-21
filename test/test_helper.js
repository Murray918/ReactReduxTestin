//test helper does these things
import jsdom from 'jsdom'
import _$ from 'jquery'
import TestUtils from 'react-addons-test-utils'
import ReactDom from 'react-dom'
import { expect } from 'chai'
import React from 'react'
import { Provider } from 'react-redux'
import {  createStore } from 'redux'
import reducers from '../src/reducers'

//set up testing enviornment to run like a browser in the command line


global.document = jsdom.jsdom('<doctype html><html><body><body></html>')
global.window = global.document.defaultView
const $ = _$(global.window)

//build render component to that should render a given react class

//redner component will take three args #1 the component #2 any props that need to be placed on it #3 any application state that needs to be present
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    //the second arg to the create store is some initial state
    <Provider store = {createStore(reducers, state)}>
    <ComponentClass {...props} />
  </Provider>
  )

  return $(ReactDom.findDOMNode(componentInstance))
}

//build helper for simulating eventsource



//set up chai jquery
export { renderComponent, expect }
