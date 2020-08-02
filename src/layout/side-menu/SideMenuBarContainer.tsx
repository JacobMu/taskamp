import React from "react";
import { Button, IconName } from "@blueprintjs/core";

import "./SideMenuBarView.scss";
import { useSideMenuContainer } from "./useSideMenuContainer";
import type { ButtonProps } from "./SideMenuService";
import { CreateNewTaskDialogContainer } from "../dialog/CreateNewTaskDialogContainer";

interface Props {
  buttons: ButtonProps[];
  dispatchNewCard(cardProps: any): void;
}

export const SideMenuBarContainer: React.FC<Props> = ({
  buttons,
  dispatchNewCard,
}) => {
  const { isDialogOpen, handleClose, handleOpen } = useSideMenuContainer();

  return (
    <div className="sideMenuBarPosition">
      <CreateNewTaskDialogContainer
        isDialogOpen={isDialogOpen}
        handleClose={handleClose}
        dispatchNewCard={dispatchNewCard}
      />
      {buttons.map(({ i18n, icon, key }) => (
        <Button
          large
          icon={icon as IconName}
          key={key}
          onClick={() => handleOpen(key)}
        >
          {i18n}
        </Button>
      ))}
    </div>
  );
};
