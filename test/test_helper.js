//test helper does these things

//set up testing enviornment to run like a browser in the command line
import jsdom from 'jsdom'
import _$ from 'jquery'

global.document = jsdom.jsdom('<doctype html><html><body><body></html>')
global.window = global.document.defaultView
const $ = _$(global.window)

//build render component to that should render a given react class



//build helper for simulating eventsource



//set up chai jquery
