import React from "react";
import { shallow } from "enzyme";

import { CreateNewTaskDialogContainer } from "../CreateNewTaskDialogContainer";

jest.mock("../useCreateNewTaskDialog", () => ({
  useCreateNewTaskDialog: jest.fn().mockReturnValue({
    handleConfirm: jest.fn().mockName("handleConfirmMock"),
    handleInput: () => {},
    formErrors: undefined,
    isTaskSubmitted: false,
    creationTime: ("12.12.2020" as unknown) as Date,
  }),
}));

const DEFAULT_PROPS = {
  isDialogOpen: true,
  handleClose: jest.fn().mockName("handleCloseMock"),
  dispatchNewCard: () => {},
};
describe("<CreateNewTaskDialogContainer />", () => {
  it("renders dialog with form", () => {
    const wrapper = shallow(<CreateNewTaskDialogContainer {...DEFAULT_PROPS} />);

    expect(wrapper).toMatchSnapshot();
  });
});
