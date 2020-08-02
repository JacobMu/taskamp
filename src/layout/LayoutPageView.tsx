import React  from "react";

import { SideMenuBarContainer } from "./side-menu/SideMenuBarContainer";
import "./LayoutPageView.scss";
import { ButtonProps } from "./side-menu/SideMenuService";
import { TaskProps } from "./dialog/CreateNewTaskDialogService";

interface Props {
  children: React.ReactNode;
  buttons: ButtonProps[];
  dispatchNewCard(cardProps: TaskProps): void;
}

export const LayoutPageView: React.FC<Props> = ({
  children,
  buttons,
  dispatchNewCard,
}) => {
  return (
    <div className="layoutPage">
      <SideMenuBarContainer
        buttons={buttons}
        dispatchNewCard={dispatchNewCard}
      />
      <div className="childFlexGrow">{children}</div>
    </div>
  );
};
