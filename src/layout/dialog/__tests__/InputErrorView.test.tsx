import React from "react";
import { shallow } from "enzyme";

import { InputErrorView } from "../InputErrorView";

describe("<InputErrorView />", () => {
  it("renders input error card with message", () => {
    const wrapper = shallow(<InputErrorView i18n="errorMsg" />);

    expect(wrapper).toMatchSnapshot();
  });
});
