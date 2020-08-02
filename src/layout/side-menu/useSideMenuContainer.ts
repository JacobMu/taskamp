import { useCallback, useState } from "react";
import { ITEM_TRANSLATION_KEY } from "./SideMenuService";

interface HookResults {
  isDialogOpen: boolean;
  handleOpen: (button: string) => void;
  handleClose: () => void;
}

export const useSideMenuContainer = (): HookResults => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpen = useCallback(
    (buttonType: string) => {
      if (buttonType === ITEM_TRANSLATION_KEY.CREATE_TASK) {
        setDialogOpen(true);
        return;
      }
      setDialogOpen(false);
    },
    [setDialogOpen]
  );

  const handleClose = useCallback(() => setDialogOpen(false), [setDialogOpen]);

  return {
    handleClose,
    handleOpen,
    isDialogOpen,
  };
};
