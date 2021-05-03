import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { createRouter } from "next/router";
import NewsContainer from "../News.container";
import NewsView from "../../views";

configure({ adapter: new Adapter() });

describe("News.container", () => {
  const router = createRouter("", {}, "", {
    initialProps: {},
    pageLoader: jest.fn(),
    App: jest.fn(),
    Component: jest.fn(),
  });

  const news = {
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
  };
  it("Render News.Container", () => {
    const wrapper = shallow(<NewsContainer />);

    wrapper.setState({ news });

    console.log(wrapper.find(NewsView));
    expect(wrapper.find(NewsView)).toHaveLength(1);
  });
});
