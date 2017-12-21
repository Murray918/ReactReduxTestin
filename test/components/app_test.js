import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//use 'discribe' to group together similar test
describe('App', () => {
  let component
//befor each render the app component to the stagin area
  beforeEach( () => {
    component = renderComponent(App)
  })

  //use 'it' to test a single attribute of a target
  it('renders comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  })

  it('shows a comment list', ()=> {
    expect(component.find('.comment-list')).to.exist
  })
})
