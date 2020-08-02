import React from "react";
import { TaskProps } from "../../layout/dialog/CreateNewTaskDialogService";
import { Card } from "@blueprintjs/core";

interface Props {
  newCard?: TaskProps;
  dragging: any;
}

export const TaskBoardCardView: React.FC<Props> = ({ newCard, dragging }) => {
  return <Card>{newCard}</Card>;
};
