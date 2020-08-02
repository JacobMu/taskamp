import { useCallback, useState } from "react";

import { TaskProps } from "../layout/dialog/CreateNewTaskDialogService";

interface HookResults {
  newCard?: TaskProps;
  dispatchNewCard(cardProps: TaskProps): void;
}

export const useDashBoardContainer = (): HookResults => {
  const [newCard, setNewCard] = useState<TaskProps | undefined>();

  const dispatchNewCard = useCallback((cardProps) => setNewCard(cardProps), []);
  return {
    newCard,
    dispatchNewCard,
  };
};
