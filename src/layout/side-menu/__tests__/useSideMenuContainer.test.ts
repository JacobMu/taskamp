import { renderHook, act } from "@testing-library/react-hooks";
import { useSideMenuContainer } from "../useSideMenuContainer";
import { ITEM_TRANSLATION_KEY } from "../SideMenuService";

describe("useSideMenuContainer", () => {
  it("returns hook results", () => {
    const { result } = renderHook(() => useSideMenuContainer());

    expect(result.current.handleClose).toEqual(expect.any(Function));
    expect(result.current.handleOpen).toEqual(expect.any(Function));
    expect(result.current.isDialogOpen).toBe(false);
  });

  it("sets isDialogOpen to true when handleOpen is triggered and button type is CREATE TASK", () => {
    const { result } = renderHook(() => useSideMenuContainer());

    act(() => result.current.handleOpen(ITEM_TRANSLATION_KEY.CREATE_TASK));

    expect(result.current.isDialogOpen).toBe(true);
  });

    it("sets isDialogOpen to false when handleOpen is triggered and button type is not CREATE TASK", () => {
        const { result } = renderHook(() => useSideMenuContainer());

        act(() => result.current.handleOpen(ITEM_TRANSLATION_KEY.LANGUAGE));

        expect(result.current.isDialogOpen).toBe(false);
    });

  it("sets isDialogOpen to true when handleClose is triggered", () => {
    const { result } = renderHook(() => useSideMenuContainer());

    act(() => result.current.handleClose());

    expect(result.current.isDialogOpen).toBe(false);
  });
});
