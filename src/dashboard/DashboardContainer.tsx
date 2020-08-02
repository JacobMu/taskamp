import React from "react";
import { IconNames } from "@blueprintjs/icons";

import { LayoutPageView } from "../layout/LayoutPageView";
import { TaskBoardContainer } from "./board/TaskBoardContainer";
import { ITEM_TRANSLATION_KEY } from "../layout/side-menu/SideMenuService";

import "./DashBoardContainer.scss";
import {useDashBoardContainer} from "./useDashBoardContainer";

export const SIDE_MENU_BUTTONS = [
  {
    i18n: "sideMenu.button.logout",
    icon: IconNames.LOG_OUT,
    key: ITEM_TRANSLATION_KEY.LOGOUT,
  },
  {
    i18n: "sideMenu.button.mainPage",
    icon: IconNames.GIT_REPO,
    key: ITEM_TRANSLATION_KEY.MAIN_PAGE,
  },
  {
    i18n: "sideMenu.button.createTask",
    icon: IconNames.INHERITANCE,
    key: ITEM_TRANSLATION_KEY.CREATE_TASK,
  },
  {
    i18n: "sideMenu.button.changeLanguage",
    icon: IconNames.TRANSLATE,
    key: ITEM_TRANSLATION_KEY.LANGUAGE,
  },
];

export const DashboardContainer: React.FC = () => {
  const {dispatchNewCard, newCard} = useDashBoardContainer();
  return (
    <LayoutPageView buttons={SIDE_MENU_BUTTONS} dispatchNewCard={dispatchNewCard}>
      <div className="dashBoardLayout">
        <TaskBoardContainer newCard={newCard}/>
      </div>
    </LayoutPageView>
  );
};
