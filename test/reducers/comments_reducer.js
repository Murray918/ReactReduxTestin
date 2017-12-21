import { expect } from  '../test_helper'
import commentReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
  //here we just make sure that the typew inside of the comment reducer always equals an array
  it('it handles an action with an unknown type', () => {
    // expect(commentReducer()).to.be.instanceof('array')
    expect(commentReducer(undefined, {})).to.eql([])
  })
//here we pass a dummy action into our reducer to check that it will return the proper state
  it('handles action of type SAVE_COMMENT', () => {
    const action = { type : SAVE_COMMENT, payload : 'new comment'}
    expect(commentReducer([], action)).to.eql(['new comment'])
  })
})
