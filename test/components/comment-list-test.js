import { renderComponent, expect } from "../test_helper";

import CommentList from "../../src/components/comment_list";

describe("CommentList", () => {
  let component;
//before each it this will render a component with 2 new comments
  beforeEach(() => {
     const props = {comments: ['New Comment', 'Other New Comment']}
    component = renderComponent(CommentList, null, props);
  });
//makes sure that the 2 comments show up as li elements
  it('shows an LI for each comment', () => {
     expect(component.find('li').length).to.equal(2);
   });
//makes sure that the components have the right text
  it("shows each comment that is provided", () => {
    expect(component).to.contain('New Comment')
    expect(component).to.contain('Other New Comment')
  });
});
