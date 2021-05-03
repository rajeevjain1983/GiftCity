import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewsRow from "../NewsRow";

configure({ adapter: new Adapter() });

describe("<NewsRow", () => {
  it("Render NewsRow view", () => {
    const props = {
      data: {
        url: "url",
        index: 1,
        title: "test",
        points: 10,
        author: "test",
        created_at: new Date("2020-05-26T06:02:13.382Z"),
        num_comments: 10,
        hide: false,
        upVotes: 0,
        linkDomain: "google.com",
      },
      hideButtonHandler: () => {},
      upVotesButtonHandler: () => {},
    };
    const component = shallow(<NewsRow {...props} />);

    expect(component).toMatchSnapshot();
  });
});
