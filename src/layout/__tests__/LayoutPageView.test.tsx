import React from "react";
import { shallow } from "enzyme";
import { LayoutPageView } from "../LayoutPageView";

const DEFAULT_PROPS = {
  buttons: [],
  dispatchNewCard: jest.fn().mockName("dispatchNewCardMock"),
};

describe("<LayoutPageView />", () => {
  it(" renders layout page", () => {
    const wrapper = shallow(
      <LayoutPageView {...DEFAULT_PROPS}>
        <div>Children Mock</div>
      </LayoutPageView>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
