//test helper does these things
import jsdom from 'jsdom'
import _$ from 'jquery'
import TestUtils from 'react-addons-test-utils'

//set up testing enviornment to run like a browser in the command line


global.document = jsdom.jsdom('<doctype html><html><body><body></html>')
global.window = global.document.defaultView
const $ = _$(global.window)

//build render component to that should render a given react class
function renderComponent(ComponentClass) {
  // const componentInstance =
}

//build helper for simulating eventsource



//set up chai jquery
