export enum FORM_FIELD_NAME {
  TASK_ID = "TASK_ID",
  TASK_NAME = "TASK_NAME",
  TASK_DATE = "TASK_DATE",
  TASK_DESCRIPTION = "TASK_DESCRIPTION",
  TASK_PRIO = "TASK_PRIO",
}

export interface FormFieldError {
  hasError: boolean;
}

export type FormFieldsErrors = {
  [inputName in FORM_FIELD_NAME]: FormFieldError;
};

export interface TaskProps {
  [FORM_FIELD_NAME.TASK_ID]?: string;
  [FORM_FIELD_NAME.TASK_NAME]?: string;
  [FORM_FIELD_NAME.TASK_DATE]?: Date;
  [FORM_FIELD_NAME.TASK_DESCRIPTION]?: string;
  [FORM_FIELD_NAME.TASK_PRIO]?: string;
}

export enum TASK_PRIORITY {
  LOWEST = "LOWEST",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  HIGHEST = "HIGHEST",
}

export const DATE_FORMAT = "DD.MM.YYYY";

export function hasFormError(taskObj?: TaskProps): boolean {
  if (!taskObj) {
    return true;
  }
  return Object.entries(taskObj)
    .map(([_taskKey, taskValue]) => !!taskValue)
    .includes(false);
}

export function getInputFieldsErrors(taskObj: TaskProps): FormFieldsErrors {
  const formFieldsErrors = Object.entries(taskObj).map(([formField, value]) => {
    return [formField, { hasError: !value }];
  });
  return Object.fromEntries(formFieldsErrors);
}
