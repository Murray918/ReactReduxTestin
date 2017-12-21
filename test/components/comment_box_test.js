import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let component
//before each it statement this will render a fresh component
  beforeEach( () => {
    component = renderComponent(CommentBox)
  })
//this component has a specific class
  it('has the class name comment-box', () => {
    expect(component).to.have.class('comment-box')
  })
//makes sure that the text area exists
  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  })
//makes sure that the text area has a button for the submit
  it('has a button', () => {
    expect(component.find('button')).to.exist;

  })
  //here were are discribing the event of entering some text in the textarea
  describe('entering some text', () => {
      beforeEach(()=> {
        //this simulates an onchange event within our text are to type in new comment
        component.find('textarea').simulate('change', 'new comment')
      })
      //double checks that the text entered is that of the simulation
      it('shows text that is enetered', () => {
        expect(component.find('textarea')).to.have.value('new comment')
      })
      //makes sure we clear the textarea after comment is submitted
      it('when submited, clears the input', () => {
        component.simulate('submit')
        expect(component.find('textarea')).to.have.value('')

      })

  })


})
