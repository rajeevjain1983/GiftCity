import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewsView from "../News.view";

configure({ adapter: new Adapter() });

describe("<News", () => {
  it("Render News view", () => {
    const props = {
      news: {
        pageInfo: {
          pageNumber: 1,
          nextPage: 2,
          apiPageNumber: 0,
        },
        newsList: [
          {
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
          {
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
        ],
        hideComment: () => {},
        upVotes: () => {},
      },
    };
    const component = shallow(<NewsView {...props} />);

    expect(component).toMatchSnapshot();
  });
});
