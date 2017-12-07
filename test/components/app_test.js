import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//use 'discribe' to group together similar test
describe('App', () => {
  let component;

  beforeEach(()=>{
    component = renderComponent('App')
  })

  //use 'it' to test a single attribute of a target
  it('renders comment box', () => {
    expect(component.find('.comment-box')).to.exist
  })
})
