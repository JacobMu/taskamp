export enum ITEM_TRANSLATION_KEY {
  LOGOUT = "Logout",
  MAIN_PAGE = "Main Page",
  CREATE_TASK = "Create task",
  LANGUAGE = "Language",
}

export interface ButtonProps {
  i18n: string;
  icon: string;
  key: string,
}
