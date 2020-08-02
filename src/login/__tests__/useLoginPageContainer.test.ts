import { renderHook, act } from "@testing-library/react-hooks";
import { useHistory } from "react-router-dom";

import { useLoginPageContainer } from "../useLoginPageContainer";

jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(() => {}),
}));

describe("useLoginPageContainer", () => {
  it("returns hook results", () => {
    const { result } = renderHook(() => useLoginPageContainer());

    expect(result.current.handleSubmit).toEqual(expect.any(Function));
  });

  it("routes to overview route when handleSubmit is triggered", () => {
    const historyPushMock = jest.fn();
    (useHistory as jest.Mock).mockReturnValue({
      push: historyPushMock,
    });

    const { result } = renderHook(() => useLoginPageContainer());
    act(() => result.current.handleSubmit());

    expect(historyPushMock).toHaveBeenCalledWith("/overview");
  });
});
