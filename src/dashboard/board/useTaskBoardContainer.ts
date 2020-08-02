import { useEffect, useState } from "react";
import { TaskBoard, INITIAL_BOARD } from "./TaskBoardContainerService";
import { TaskProps } from "../../layout/dialog/CreateNewTaskDialogService";

interface HookResults {
  taskBoard: TaskBoard;
}

function getUpdatedBoard(taskBoard: TaskBoard, newCard?: TaskProps): TaskBoard {
  if (!newCard) {
    return taskBoard;
  }
  return {
    columns: [
        ...taskBoard.columns,
      {
        ...taskBoard.columns[0],
        cards: [...taskBoard.columns[0].cards, newCard]
      }
    ],
  };
}

export const useTaskBoardContainer = (newCard?: TaskProps): HookResults => {
  const [taskBoard, setTaskBoard] = useState<TaskBoard>(INITIAL_BOARD);

  useEffect(() => {
    if (newCard) {
      setTaskBoard(getUpdatedBoard(taskBoard, newCard));
    }
  }, [newCard, taskBoard]);

  return {
    taskBoard,
  };
};
