import React from "react";
import { shallow } from "enzyme";
import { SideMenuBarContainer } from "../SideMenuBarContainer";
import { useSideMenuContainer } from "../useSideMenuContainer";
import {Button} from "@blueprintjs/core";

jest.mock("../useSideMenuContainer", () => ({
  useSideMenuContainer: jest.fn().mockReturnValue({
    isDialogOpen: false,
    handleClose: jest.fn().mockName("handleCloseMock"),
    handleOpen: jest.fn().mockName("handleOpenMock"),
  }),
}));

const DEFAULT_PROPS = {
  buttons: [{ i18n: "translation key", icon: "add", key: "key" }],
  dispatchNewCard: jest.fn().mockName("dispatchNewCardMock"),
};

describe("<SideMenuBarContainer />", () => {
  it("renders side menu bar", () => {
    const wrapper = shallow(<SideMenuBarContainer {...DEFAULT_PROPS} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls handleOpen with correct key as argument when clicked on button", () => {
    const handleOpenMock = jest.fn();
    (useSideMenuContainer as jest.Mock).mockReturnValue({
      handleOpen: handleOpenMock,
    });
    const wrapper = shallow(<SideMenuBarContainer {...DEFAULT_PROPS} />);

    wrapper.find(Button).simulate("click");

    expect(handleOpenMock).toHaveBeenCalledWith('key');
  });
});
