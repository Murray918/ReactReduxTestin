import { expect } from '../test_helper'
import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions'


describe('actions', () => {
  //this runs the save comment action and makes sure that every thing checks out
  describe('saveComment', () => {
    //here we check the type
    it ('has the correct type', () => {
      const action = saveComment()
      expect(action.type).to.equal(SAVE_COMMENT)
    })
    //here we check the payload
    it('has the correct payload', () => {
      //we then run the function with something in it to check payload
      const action = saveComment('New Comment')
      expect(action.payload).to.equal('New Comment')

    })
  })
})
