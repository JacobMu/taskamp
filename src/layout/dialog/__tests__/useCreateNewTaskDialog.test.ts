import { renderHook, act } from "@testing-library/react-hooks";

import { useCreateNewTaskDialog } from "../useCreateNewTaskDialog";
import * as CreateNewTaskDialogService from "../CreateNewTaskDialogService";
import {
  FORM_FIELD_NAME,
  FormFieldsErrors,
} from "../CreateNewTaskDialogService";

jest.mock("moment", () => () => ({
  toDate: () => "12.12.2020",
  format: () => "2020–01–30T12:34:56+00:00",
}));

describe("useCreateNewTaskDialog", () => {
  const dispatchNewCardMock = () => {};

  it("returns hook results", () => {
    const { result } = renderHook(() =>
      useCreateNewTaskDialog(dispatchNewCardMock)
    );

    expect(result.current.creationTime).toBe("12.12.2020");
    expect(result.current.formErrors).toBe(undefined);
    expect(result.current.isTaskSubmitted).toBe(false);
    expect(result.current.handleInput).toEqual(expect.any(Function));
    expect(result.current.handleConfirm).toEqual(expect.any(Function));
  });

  it("sets form errors if form has errors", () => {
    jest
      .spyOn(CreateNewTaskDialogService, "hasFormError")
      .mockReturnValue(true);
    jest
      .spyOn(CreateNewTaskDialogService, "getInputFieldsErrors")
      .mockReturnValue({} as FormFieldsErrors);
    const { result } = renderHook(() =>
      useCreateNewTaskDialog(dispatchNewCardMock)
    );

    act(() => result.current.handleConfirm());

    expect(result.current.formErrors).toEqual({});
  });

  it("calls dispatchNewCard with new task and sets isTaskSubmitted to true", () => {
    jest
      .spyOn(CreateNewTaskDialogService, "hasFormError")
      .mockReturnValue(false);
    const dispatchMock = jest.fn();
    const { result } = renderHook(() => useCreateNewTaskDialog(dispatchMock));

    act(() => result.current.handleConfirm());

    expect(dispatchMock).toHaveBeenCalledWith({
      ["TASK_DATE"]: "12.12.2020",
      ["TASK_DESCRIPTION"]: "",
      ["TASK_ID"]: "",
      ["TASK_NAME"]: "",
      ["TASK_PRIO"]: "LOWEST",
    });
    expect(result.current.isTaskSubmitted).toBe(true);
  });

  it("set new task when handleInput is triggered", () => {
    jest
      .spyOn(CreateNewTaskDialogService, "hasFormError")
      .mockReturnValue(false);
    const dispatchMock = jest.fn();
    const { result } = renderHook(() => useCreateNewTaskDialog(dispatchMock));

    act(() =>
      result.current.handleInput(FORM_FIELD_NAME.TASK_DESCRIPTION, "test")
    );
    act(() => result.current.handleConfirm());

    expect(dispatchMock).toHaveBeenCalledWith({
      ["TASK_DATE"]: "12.12.2020",
      ["TASK_DESCRIPTION"]: "test",
      ["TASK_ID"]: "",
      ["TASK_NAME"]: "",
      ["TASK_PRIO"]: "LOWEST",
    });
  });
});
