import React from "react";
//@ts-ignore
import Board from "@lourenci/react-kanban";

import { useTaskBoardContainer } from "./useTaskBoardContainer";
import { TaskProps } from "../../layout/dialog/CreateNewTaskDialogService";
import { TaskBoardCardView } from "../card/TaskBoardCardView";

import "@lourenci/react-kanban/dist/styles.css";
import "./TaskBoardContainer.scss";

interface Props {
  newCard?: TaskProps;
}

export const TaskBoardContainer: React.FC<Props> = ({ newCard }) => {
  const { taskBoard } = useTaskBoardContainer(newCard);

  const renderNewCard = ({ newCard }: any, { dragging }: any) => {
    if (!newCard) {
      return null;
    }
    return <TaskBoardCardView newCard={newCard} dragging={dragging} />;
  };

  return (
    <div className="taskBoardLayout">
      <Board renderCard={renderNewCard}>
        {taskBoard}
      </Board>
    </div>
  );
};
