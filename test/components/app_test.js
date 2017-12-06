import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//use 'discribe' to group together similar test
describe('App', () => {

  //use 'it' to test a single attribute of a target
  it('it shows the correct text', () => {

      // create an instance of app
      const component = renderComponent(App)

      //use 'expect' to make an assertion about a target
      expect(component).to.contain('React simple starter')


  })

})
