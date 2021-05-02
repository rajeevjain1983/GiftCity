import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../Header.view";

configure({ adapter: new Adapter() });

describe("<Header>", () => {
  it("Render Header view", () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
