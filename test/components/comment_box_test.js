import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let component

  beforeEach( () => {
    component = renderComponent(CommentBox)
  })

  it('has the class name comment-box', () => {
    expect(component).to.have.class('comment-box')
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist;

  })

  describe('entering some text', () => {

      beforeEach(()=> {
        component.find('textarea').simulate('change', 'new comment')
      })

      it('shows text that is enetered', () => {
        // expect(component)
      })

      it('when submited, clears the input' () => {
        // expect(component)

      })

  })


})
