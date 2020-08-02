import React from "react";
import { shallow } from "enzyme";
import {LoginPageFormView} from "../LoginPageFormView";

describe("<LoginPageContainer />", () => {
  it("renders Login page form", () => {
    const wrapper = shallow(<LoginPageFormView />);

    expect(wrapper).toMatchSnapshot();
  });
});
