import React from "react";
import { shallow } from "enzyme";
import LoginPageContainer from "../LoginPageContainer";

jest.mock("../useLoginPageContainer", () => ({
  useLoginPageContainer: jest.fn().mockReturnValue({
    handleSubmit: jest.fn().mockName("handleSubmitMock"),
  }),
}));

describe("<LoginPageContainer />", () => {
  it("renders Login page form", () => {
    const wrapper = shallow(<LoginPageContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
